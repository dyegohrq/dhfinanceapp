import { ReactNode } from "react";
import { MenuMobile } from "../_components/menu/mobile_menu";
import { MenuDesktop } from "../_components/menu/desktop_menu";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" flex flex-col lg:flex-row justify-between lg:justify-start  w-full h-screen ">
      <MenuDesktop/>
      {children}
      <MenuMobile />
    </div>
  );
}
