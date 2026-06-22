import { Outlet, useMatches } from "react-router";

import { Header } from "@organisms";
import { DefaultPagesTemplate } from "@templates";
import type { shopRouteHandleType } from "@types";

export default function ShopShellLayout() {
  const matches = useMatches();
  const noFooter = matches.some((match) => Boolean((match.handle as shopRouteHandleType | undefined)?.noFooter));

  return (
    <div className="flex min-h-dvh flex-col">
      <div className="shrink-0">
        <Header />
      </div>
      <main className="flex min-h-0 flex-1 flex-col">
        <DefaultPagesTemplate noFooter={noFooter}>
          <Outlet />
        </DefaultPagesTemplate>
      </main>
    </div>
  );
}
