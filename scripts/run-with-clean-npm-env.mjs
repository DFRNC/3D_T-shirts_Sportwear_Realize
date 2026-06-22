#!/usr/bin/env node
/**
 * Strips pnpm-specific npm_config_* env vars before spawning npm/npx.
 * Prevents "npm warn Unknown env config" when Shopify CLI or Prisma invoke npm under pnpm.
 */
import { spawn } from "node:child_process";
import process from "node:process";

const PNPM_ONLY_NPM_CONFIG_KEYS = new Set([
  "allow-builds",
  "auto-install-peers",
  "dedupe-peer-dependents",
  "manage-package-manager-versions",
  "shamefully-hoist",
  "verify-deps-before-run",
]);

function sanitizeNpmEnv(env) {
  const next = { ...env };

  for (const key of Object.keys(next)) {
    if (!key.startsWith("npm_config_")) continue;

    const configKey = key.slice("npm_config_".length).replaceAll("_", "-");

    if (
      PNPM_ONLY_NPM_CONFIG_KEYS.has(configKey) ||
      configKey.includes("jsr-registry")
    ) {
      delete next[key];
    }
  }

  return next;
}

const [command, ...args] = process.argv.slice(2);

if (!command) {
  console.error("Usage: node scripts/run-with-clean-npm-env.mjs <command> [...args]");
  process.exit(1);
}

const child = spawn(command, args, {
  stdio: "inherit",
  env: sanitizeNpmEnv(process.env),
  shell: process.platform === "win32",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
