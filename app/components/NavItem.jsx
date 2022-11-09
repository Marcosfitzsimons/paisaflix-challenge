"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItem = ({ route, text }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname == route
          ? "border-b-[3px] border-b-yellow-400 font-semibold text-white"
          : "border-b-transparent text-gray-300"
      } py-1`}
      href={route}
    >
      {text}
    </Link>
  );
};

export default NavItem;
