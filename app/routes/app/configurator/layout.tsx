import { Outlet } from "react-router";

import { Header } from "@organisms";

export default function ConfiguratorLayout() {
  return (
    <div className="flex h-dvh max-h-dvh flex-col overflow-hidden bg-linear-to-t from-[#E8E8E8] to-white">
      <div className="shrink-0">
        <Header />
      </div>
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
