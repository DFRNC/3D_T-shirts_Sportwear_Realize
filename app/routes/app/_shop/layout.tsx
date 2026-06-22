import { Outlet } from "react-router";

import { Header } from "@organisms";

export default function ShopShellLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="shrink-0">
        <Header />
      </div>
      <main className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  );
}
