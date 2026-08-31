"use client";

import { getMenuLinks, MENULINKS } from "@/lib/options";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MenuMobile() {
  const pathname = usePathname();
  const menu = getMenuLinks(pathname);

  return (
    <nav>
      <div className="bg-grey-900 px-10 pt-2 rounded-t-[8px] flex w-full items-center justify-between gap-2 lg:hidden ">
        {menu.map(
          ({ href, icon: Icon, isActive, label }) =>
            label !== "Minimize menu" && (
              <Link
                key={label}
                href={href ? href : ""}
                className={cn(
                  "  flex flex-col items-center justify-center gap-2 pt-2 pb-3  rounded-t-[8px] flex-1",
                  isActive && "border-b-4 border-green bg-beige-100",
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
                    " present-5-bold text-grey-300 hidden md:block ",
                    isActive && "text-grey-900",
                  )}
                >
                  {" "}
                  {label}{" "}
                </span>
              </Link>
            ),
        )}
      </div>
    </nav>
  );
}
