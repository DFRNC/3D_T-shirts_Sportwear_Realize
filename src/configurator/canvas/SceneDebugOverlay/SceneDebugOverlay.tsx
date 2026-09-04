'use client';

import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import type { Scene, WebGLRenderer } from 'three';

/**
 * On-screen diagnostics for devices where remote DevTools is unreachable.
 * Enable by adding `?debug` to the configurator URL.
 *
 * `SceneDebugBridge` mounts INSIDE the r3f <Canvas>, grabs the renderer + scene
 * with a single `useThree` read and stashes them on `window`. `SceneDebugOverlay`
 * is a plain DOM component (mounts outside the canvas) that polls that bridge and
 * renders a fixed panel: GPU info, every mesh + whether its material has a
 * compiled program, and any intercepted shader-compile errors.
 */

type Bridge = { gl: WebGLRenderer; scene: Scene };

const BRIDGE_KEY = '__configuratorSceneDebug';

const isEnabled = () =>
  typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('debug');

const SceneDebugBridge = () => {
  const gl = useThree((state) => state.gl);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (!isEnabled()) return undefined;
    (window as unknown as Record<string, Bridge>)[BRIDGE_KEY] = { gl, scene };
    return () => {
      delete (window as unknown as Record<string, Bridge | undefined>)[BRIDGE_KEY];
    };
  }, [gl, scene]);

  return null;
};

type MeshRow = {
  name: string;
  visible: boolean;
  matType: string;
  shaderMode: string;
  hasProgram: boolean;
  color: string;
};

const SceneDebugOverlay = () => {
  const [info, setInfo] = useState<string[]>([]);
  const [rows, setRows] = useState<MeshRow[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (!isEnabled()) return undefined;

    const originalError = console.error;
    const captured: string[] = [];
    console.error = (...args: unknown[]) => {
      const text = args.map((a) => (typeof a === 'string' ? a : String(a))).join(' ');
      if (/shader|program|glsl|compile|link|WebGLProgram|THREE\.WebGL/i.test(text)) {
        captured.push(text.slice(0, 4000));
        setErrors([...captured]);
      }
      originalError.apply(console, args as []);
    };

    let infoDone = false;

    const interval = window.setInterval(() => {
      const bridge = (window as unknown as Record<string, Bridge | undefined>)[BRIDGE_KEY];
      if (!bridge) return;
      const { gl, scene } = bridge;

      const debug = (gl as unknown as { debug?: { checkShaderErrors?: boolean } }).debug;
      if (debug && debug.checkShaderErrors === false) debug.checkShaderErrors = true;

      if (!infoDone) {
        const ctx = gl.getContext();
        const dbg = ctx.getExtension('WEBGL_debug_renderer_info');
        setInfo([
          `GL: ${typeof WebGL2RenderingContext !== 'undefined' && ctx instanceof WebGL2RenderingContext ? 'WebGL2' : 'WebGL1'}`,
          `RENDERER: ${String(ctx.getParameter(dbg ? dbg.UNMASKED_RENDERER_WEBGL : ctx.RENDERER))}`,
          `VARYING_VECTORS: ${ctx.getParameter(ctx.MAX_VARYING_VECTORS)}`,
          `FRAG_UNIFORM_VECTORS: ${ctx.getParameter(ctx.MAX_FRAGMENT_UNIFORM_VECTORS)}`,
          `TEX_IMAGE_UNITS: ${ctx.getParameter(ctx.MAX_TEXTURE_IMAGE_UNITS)}`,
          `VERT_TEX_IMAGE_UNITS: ${ctx.getParameter(ctx.MAX_VERTEX_TEXTURE_IMAGE_UNITS)}`,
          `parallel_compile: ${ctx.getExtension('KHR_parallel_shader_compile') ? 'yes' : 'no'}`,
        ]);
        infoDone = true;
      }

      const collected: MeshRow[] = [];
      scene.traverse((obj) => {
        const mesh = obj as unknown as {
          isMesh?: boolean;
          name?: string;
          visible?: boolean;
          material?:
            | { type?: string; userData?: Record<string, unknown>; program?: unknown; color?: { getHexString?: () => string } }
            | Array<{ type?: string; userData?: Record<string, unknown>; program?: unknown; color?: { getHexString?: () => string } }>;
        };
        if (!mesh.isMesh) return;
        const mat = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
        collected.push({
          name: mesh.name || '(unnamed)',
          visible: Boolean(mesh.visible),
          matType: mat?.type ?? 'none',
          shaderMode: String((mat?.userData?.garmentShaderMode as string) ?? '-'),
          hasProgram: Boolean(mat?.program),
          color: mat?.color?.getHexString?.() ?? '-',
        });
      });
      setRows(collected);
    }, 600);

    return () => {
      window.clearInterval(interval);
      console.error = originalError;
    };
  }, []);

  if (!isEnabled()) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 999999,
        maxHeight: '62vh',
        width: '100vw',
        overflow: 'auto',
        background: 'rgba(0,0,0,0.92)',
        color: '#0f0',
        font: '10px/1.35 ui-monospace, monospace',
        padding: '8px 10px',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      <div style={{ color: '#fff', fontWeight: 700 }}>SCENE DEBUG — remove ?debug to hide</div>
      {info.map((l) => (
        <div key={l}>{l}</div>
      ))}
      <div style={{ color: '#ff0', marginTop: 6 }}>MESHES ({rows.length})</div>
      {rows.map((r, i) => (
        <div key={`${r.name}-${i}`} style={{ color: r.hasProgram ? '#7f7' : '#f66' }}>
          {r.name} | vis={String(r.visible)} | {r.matType} | mode={r.shaderMode} | prog=
          {String(r.hasProgram)} | #{r.color}
        </div>
      ))}
      <div style={{ color: errors.length ? '#f33' : '#777', marginTop: 6, fontWeight: 700 }}>
        SHADER ERRORS ({errors.length})
      </div>
      {errors.map((e, i) => (
        <div key={i} style={{ color: '#f99' }}>
          {e}
        </div>
      ))}
    </div>
  );
};

export { SceneDebugBridge, SceneDebugOverlay, isEnabled as isSceneDebugEnabled };
