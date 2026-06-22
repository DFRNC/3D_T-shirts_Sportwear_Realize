import { reactRouter } from "@react-router/dev/vite";
import { createLogger, defineConfig, type PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
if (
  process.env.HOST &&
  (!process.env.SHOPIFY_APP_URL ||
    process.env.SHOPIFY_APP_URL === process.env.HOST)
) {
  process.env.SHOPIFY_APP_URL = process.env.HOST;
  delete process.env.HOST;
}

const appUrl = new URL(process.env.SHOPIFY_APP_URL || "http://localhost:3000");
const host = appUrl.hostname;
const localhostProxyPort = appUrl.port ? Number(appUrl.port) : null;
const usesLocalhostHttpsProxy =
  host === "localhost" &&
  appUrl.protocol === "https:" &&
  localhostProxyPort !== null;

let hmrConfig;
if (usesLocalhostHttpsProxy) {
  // shopify app dev --use-localhost: browser loads https://localhost:3458,
  // HMR websocket must go through the same HTTPS proxy (not ws://64999).
  hmrConfig = {
    protocol: "wss",
    host: "localhost",
    port: Number(process.env.PORT || 3000),
    clientPort: localhostProxyPort,
  };
} else if (host === "localhost") {
  hmrConfig = {
    protocol: "ws",
    host: "localhost",
    port: 64999,
    clientPort: 64999,
  };
} else {
  hmrConfig = {
    protocol: "wss",
    host: host,
    port: parseInt(process.env.FRONTEND_PORT!) || 8002,
    clientPort: 443,
  };
}

const isSourcemapNoise = (message: string) =>
  message.includes("Can't resolve original location of error") ||
  message.includes("Error when using sourcemap for reporting an error");

const logger = createLogger();
const originalLoggerWarn = logger.warn.bind(logger);
logger.warn = (msg, options) => {
  if (isSourcemapNoise(msg)) return;
  originalLoggerWarn(msg, options);
};

export default defineConfig({
  customLogger: logger,
  server: {
    allowedHosts: [host],
    cors: {
      preflightContinue: true,
    },
    port: Number(process.env.PORT || 3000),
    hmr: hmrConfig,
    watch: {
      ignored: ["**/node_modules/**", "**/.git/**"],
    },
    fs: {
      allow: ["app", "src", "public", "node_modules"],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()] as PluginOption[],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      onLog(level, log, handler) {
        const causeMessage =
          log.cause &&
          typeof log.cause === "object" &&
          "message" in log.cause &&
          typeof log.cause.message === "string"
            ? log.cause.message
            : "";
        if (isSourcemapNoise(log.message) || isSourcemapNoise(causeMessage)) {
          return;
        }
        if (log.code === "SOURCEMAP_ERROR") return;
        handler(level, log);
      },
    },
  },
  optimizeDeps: {
    include: [
      "@shopify/app-bridge-react",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "detect-gpu",
    ],
  },
  ssr: {
    external: [
      "@react-three/fiber",
      "@react-three/drei",
      "three",
      "detect-gpu",
      "three-stdlib",
    ],
  },
});
