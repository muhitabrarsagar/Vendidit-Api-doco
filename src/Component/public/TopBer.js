import React from "react";
import { FaRegListAlt, FaFileAlt, FaClipboardList } from "react-icons/fa";
import Logo from "../Logo";

const TopBer = ({ open, hendleclose }) => {
  return (
    <div
      className={
        open
          ? "w-64 bg-gray-50 h-full lg:hidden block fixed text-gray-500 px-4 "
          : "sidebar hidden w-0 transition-all duration-500"
      }
    >
      <div className={`py-3`}>
        <Logo />
      </div>

      <ul className="mt-4 space-y-3 cursor-pointer">
        <li
          onClick={hendleclose}
          className="mb-2 rounded  hover:bg-slate-200 py-2"
        >
          <a href="#list" className="px-3">
            <FaRegListAlt className="inline-block w-5 h-5 mr-4"></FaRegListAlt>{" "}
            List of Listings
          </a>
        </li>
        <li
          onClick={hendleclose}
          className="mb-2 rounded py-2  hover:bg-slate-200"
        >
          <a href="#listing" className="px-3">
            <FaFileAlt className="inline-block w-5 h-5  mr-4"> </FaFileAlt>
            Listing Details
          </a>
        </li>
        <li
          onClick={hendleclose}
          className="mb-2 rounded   hover:bg-slate-200 py-2"
        >
          <a href="#order" className="px-3">
            <FaClipboardList className="inline-block w-5 h-5  mr-4"></FaClipboardList>
            Order List
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopBer;
