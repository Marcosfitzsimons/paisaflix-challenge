"use client";

import { useState } from "react";
import Link from "next/link";
import MenuToggle from "./MenuToggle";

const MobileNav = ({ navLinks }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <MenuToggle showMenu={showMenu} setShowMenu={setShowMenu} />
      <nav
        className={`${
          showMenu ? "translate-x-0" : "translate-x-[450px]"
        } min-h-screen absolute inset-y-0 right-0 left-[40%] py-[min(20rem,15vh)] px-8 backdrop-blur-md md:hidden`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.route}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
