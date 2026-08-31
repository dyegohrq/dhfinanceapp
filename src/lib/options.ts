import { IconType } from "react-icons/lib";
import { GoHomeFill } from "react-icons/go";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { PiChartDonutFill, PiTipJarFill, PiReceiptFill } from "react-icons/pi";
import { FaLongArrowAltLeft  } from "react-icons/fa";

export type MENULINKSPROPS = {
  label: string;
  href?: string;
  icon: IconType;
  isActive: boolean;
};

export const MENULINKS: MENULINKSPROPS[] = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: GoHomeFill,
    isActive: true,
  },
  {
    label: "Transações",
    href: "/dashboard/transaction",
    icon: HiMiniArrowsUpDown,
    isActive: false,
  },
  {
    label: "Despesas",
    href: "/dashboard/budget",
    icon: PiChartDonutFill,
    isActive: false,
  },
  {
    label: "Metas",
    href: "/dashboard/pots",
    icon: PiTipJarFill,
    isActive: false,
  },
  {
    label: "Contas recorrentes",
    href: "/dashboard/recurringBills",
    icon: PiReceiptFill,
    isActive: false,
  },
  {
    label: "Minimize menu",
    icon: FaLongArrowAltLeft ,
    isActive: false,
  },
];

export function getMenuLinks(pathname: string) {
  return MENULINKS.map((item) => ({
    ...item,
    isActive: pathname === item.href ? true : false,
  }));
}
