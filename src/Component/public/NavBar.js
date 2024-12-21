import React from "react";
import { IoIosMenu } from "react-icons/io";
import Logo from "../Logo";
const NavBar = ({ click }) => {
  return (
    <nav className="bg-gray-50 shadow-sm px-4 py-3 lg:hidden flex justify-between w-full fixed">
      <div className="flex">
        <div className={`py-auto`}>
          <Logo />
        </div>
      </div>
      <button className="flex ml-auto my-auto">
        <IoIosMenu className="h-[28px] w-[30px]" onClick={click}>
          {" "}
        </IoIosMenu>
      </button>
    </nav>
  );
};

export default NavBar;
