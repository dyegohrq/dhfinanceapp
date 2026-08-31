"use client";

import Image from "next/image";
import logoLarge from "@/../public/Logo-large-menu.png";
import logosmall from "@/../public/logo-small-menu.png";
import { useState } from "react";
import { getMenuLinks } from "@/lib/options";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MenuDesktop() {
  const pathname = usePathname();
  const [minimizeMenu, setMinimizeMenu] = useState(false);
  const menu = getMenuLinks(pathname);

  return (
    <nav
      className={cn(
        " hidden lg:flex flex-col gap-10 bg-grey-900 rounded-r-[16px] h-screen max-w-75 pr-2 transition ",
        minimizeMenu && " max-w-22",
      )}
    >
      <div className={cn(" p-8 ", minimizeMenu && "pt-8 px-5")}>
        {minimizeMenu ? (
          <Image alt=" Logo DH " src={logosmall} />
        ) : (
          <Image alt="Logo DH|Finance" src={logoLarge} />
        )}
      </div>
      <div className=" flex flex-col gap-1 ">
        {menu.map(
          ({ href, icon: Icon, isActive, label }) =>
            label !== "Minimize menu" && (
              <Link
                key={label}
                href={href ? href : ""}
                className={cn(
                  "  flex flex-row items-center justify-start gap-2 pl-4 py-4 rounded-r-[8px] flex-1",
                  isActive && "border-l-4 border-green bg-beige-100",
                  minimizeMenu && "justify-center pl-0",
                )}
              >
                <span>
                  {
                    <Icon
                      size={20}
                      className={cn(
                        " text-grey-300 ",
                        isActive && " text-green ",
                      )}
                    />
                  }
                </span>
                <span
                  className={cn(
                    " present-5-bold text-grey-300 transition",
                    isActive && "text-grey-900",
                    minimizeMenu && "hidden",
                  )}
                >
                  {" "}
                  {label}{" "}
                </span>
              </Link>
            ),
        )}
      </div>
      <div className="flex flex-1 items-center justify-center ">
        {menu.map(
          ({ icon: Icon, isActive, label }) =>
            label === "Minimize menu" && (
              <button
                key={label}
                onClick={() => setMinimizeMenu(!minimizeMenu)}
                className={cn(
                  "  flex flex-row items-center justify-start gap-2 pl-4 py-4 rounded-r-[8px] flex-1",
                  isActive && "border-l-4 border-green bg-beige-100",
                  minimizeMenu && "justify-center pl-0",
                )}
              >
                <span>
                  {
                    <Icon
                      size={20}
                      className={cn(
                        " text-grey-300 transition ",
                        isActive && " text-green ",
                        minimizeMenu && "rotate-180",
                      )}
                    />
                  }
                </span>
                <span
                  className={cn(
                    " present-5-bold text-grey-300 transition",
                    isActive && "text-grey-900",
                    minimizeMenu && "hidden",
                  )}
                >
                  {" "}
                  {label}{" "}
                </span>
              </button>
            ),
        )}
      </div>
    </nav>
  );
}
