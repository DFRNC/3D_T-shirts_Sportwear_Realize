import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import { anton, bebasNeue, blackOpsOne, inter, oswald, russoOne } from "@fonts";
import { cn } from "@utils";

import "../src/ui/styles/globals.css";

export default function App() {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-full antialiased bg-white font-sans",
        inter.variable,
        "font-sans",
        oswald.variable,
        bebasNeue.variable,
        anton.variable,
        russoOne.variable,
        blackOpsOne.variable,
      )}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
