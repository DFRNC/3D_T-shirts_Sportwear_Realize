import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

// flatRoutes only scans top-level route modules (files like auth.$.tsx).
// Nested folders such as routes/app/** are defined manually below.
const flat = await flatRoutes({
  ignoredRouteFiles: ["routes/app*", "routes/app/**"],
});

export default [
  ...flat.filter((entry) => !entry.file.startsWith("routes/app")),
  route(
    "webhooks/app/scopes_update",
    "routes/webhooks/app/scopes_update/route.tsx",
  ),
  route(
    "webhooks/app/uninstalled",
    "routes/webhooks/app/uninstalled/route.tsx",
  ),
  route("app", "routes/app/route.tsx", [
    layout("routes/app/_shop/route.tsx", [
      index("routes/app/page.tsx"),
      route("checkout", "routes/app/checkout/route.tsx"),
    ]),
    route("configurator/:slug", "routes/app/configurator/route.tsx", [
      index("routes/app/configurator/page.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
