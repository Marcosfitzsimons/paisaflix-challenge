"use client";

import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const MenuToggle = ({ showMenu, setShowMenu }) => {
  const handleShowMenu = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  return (
    <div className="z-50 md:hidden">
      {!showMenu ? (
        <CgMenuRightAlt
          onClick={handleShowMenu}
          className="cursor-pointer text-2xl"
        />
      ) : (
        <IoCloseSharp
          onClick={handleShowMenu}
          className="cursor-pointer text-3xl"
        />
      )}
    </div>
  );
};

export default MenuToggle;
