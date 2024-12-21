import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaRegListAlt, FaFileAlt, FaClipboardList } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CodeBlock from "./CodeBlock";
import SecCopyber from "./Seccopyber";
import LastCodeBlock from "./LastCopyber";
import Logo from "../Logo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex ">
      <div
        className={`${
          isOpen ? "w-64" : "w-18"
        } bg-gray-50 h-screen ml-0 lg:block hidden  fixed lg:shadow-none shadow-md  lg:p-5 transition-all duration-500  text-gray-500 `}
      >
        <div
          className={`${
            isOpen ? " flex justify-end" : " flex justify-center mx-auto"
          }  `}
        >
          <button
            onClick={toggleSidebar}
            className="text-gray-500 bg-white border-2 border-gray-400  rounded-full p-[5px]  hover:bg-gray-100 -mb-6 lg:flex hidden "
          >
            {isOpen ? (
              <IoIosArrowBack size={12} />
            ) : (
              <IoIosArrowForward size={12} />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? " flex text-left ml-[12px] lg:-mt-0 -mt-14" : "hidden"
          }`}
        >
          <Logo />
        </div>
        <div
          className={`${
            isOpen ? " mt-6 flex text-left ml-[12px] " : "hidden"
          }  `}
        >
          <p className="text-[12px]">API Documentaion</p>
        </div>
        <ul className="mt-4 space-y-3  justify-center cursor-pointer">
          <li
            className={`flex items-center ${
              isOpen ? "justify-start" : "justify-center mt-10"
            } space-x-3  px-4 py-2  hover:bg-slate-200`}
          >
            <FaRegListAlt size={20} />
            {isOpen && (
              <a href="#list" className="transition">
                <span> List of Listings </span>
              </a>
            )}
          </li>

          <li
            className={`flex items-center ${
              isOpen ? "justify-start" : "justify-center"
            } space-x-3  px-4 py-2  hover:bg-slate-200`}
          >
            <FaFileAlt size={20} />
            {isOpen && (
              <a href="#listing">
                <span>Listing Details</span>{" "}
              </a>
            )}
          </li>
          <li
            className={`flex items-center ${
              isOpen ? "justify-start" : "justify-center"
            } space-x-3   px-4 py-2  hover:bg-slate-200`}
          >
            <FaClipboardList size={20} />
            {isOpen && (
              <a href="#order">
                <span>Order List</span>
              </a>
            )}
          </li>
        </ul>
      </div>{" "}
      {/* Main Content */}
      <div className="flex w-full ">
        <div className="lg:w-[800px] 2xl:[1100px] w-full p-[16px] mx-auto">
          <section className="lg:mt-10 mt-20">
            <h4 className="text-[32px] font-semibold">Documentations</h4>
            <p className="text-[16px]">
              API documentation to guide endpoint usage
            </p>
          </section>
          <section className="border-y-2 grid lg:grid-cols-2 sm:grid-cols-1 mt-10 py-14">
            <div className=" ">
              <h4 className="text-[32px] font-semibold">
                Vendidit
                <br /> API documentation
              </h4>
              <p className="text-mdFont text-subtitleSize mt-4 leading-loose">
                Vendidit provides APIs that enable third-party developers to
                access listings, orders, and other key data in the secondary
                market. With an API key, users can efficiently manage inventory,
                retrieve orders, and access marketplace information.
              </p>
            </div>
            <div className="my-auto 2xl:mx-auto lg:ml-auto mx-auto">
              <img
                src="./Img/hero01.png"
                alt=""
                className="h-[200px] w-[356]"
              />
            </div>
          </section>
          <section className="flex  mt-16">
            <div className="lg:flex lg:flex-col hidden   lg:space-y-2">
              {/* Black Line */}
              <div className="h-2 w-16 bg-black rounded"></div>

              {/* Gray Lines */}
              {[...Array(12)].map((_, index) => (
                <div key={index} className="h-2 w-16 bg-gray-300 rounded"></div>
              ))}
            </div>
            <section className=" lg:pl-16  w-full">
              <h2 className="font-semibold text-titleSize ">
                What does Vendidit do?
              </h2>

              <p className="mt-4 text-mdFont leading-loose text-subtitleSize">
                Vendidit connects resellers and consumers in the secondary
                market by providing robust APIs that allow users to access
                listings, manage orders, and integrate data into their
                platforms. Our tools simplify processes in the $800B reverse
                logistics sector, helping businesses optimize their operations
                and grow their impact.
              </p>
            </section>
          </section>
          <section className="pt-10  px:6 w-full ">
            <h1 className="font-semibold text-titleSize">
              How does Vendidit contribute to your business?
            </h1>
            <p className="text-mdFont text-subtitleSize mt-4 leading-loose ">
              Vendidit provides a comprehensive API suite that gives businesses
              access to key marketplace data, including Listings and Orders.
              These APIs enable companies to integrate valuable functionality
              into their platforms and streamline operations. With Vendidit, you
              can:
            </p>
            <div className="text-mdFont pt-8 text-subtitleSize pl-6 space-y-3">
              <li>
                Access detailed Listings and Orders data to improve
                decision-making and optimize inventory management.
              </li>
              <li>
                Retrieve transaction information to efficiently track sales and
                order history.
              </li>
              <li>
                Integrate marketplace data into your platform to enhance user
                experience and operational efficiency.
              </li>
            </div>
            <div className="pt-16">
              <h1 className="font-semibold text-titleSize">Prerequisites</h1>
              <div className="mt-4 text-mdFont text-subtitleSize space-y-3  pl-6 ">
                <li>
                  This guide assumes you have a vendidit api key provided by
                  vendidit team.
                </li>
                <li>We will use URLs to make API calls.</li>
              </div>
            </div>
            <div className="pt-16">
              <h1 className="font-semibold text-titleSize">
                Set up your api key
              </h1>
              <div className="text-mdFont text-subtitleSize mt-4 leading-loose ">
                <p>To setup your api key, simply contact vendidit team</p>
                <a href="https://vendidit.com/contact">
                  <span className="text-sky-400">
                    https://vendidit.com/contact
                  </span>
                </a>
              </div>
            </div>
            <div className="pt-16">
              <h1 className="font-semibold text-titleSize">
                <a id="list"> List of Listings</a>
              </h1>
              <p className="text-subtitleSize text-mdFont mt-[15px]">
                This example demonstrates how to retrieve list of listings using
                the API
              </p>

              <p className="text-[151414] mt-[30px] text-[20px]">
                Query parameters:
              </p>
              <div className="mt-4 text-mdFont text-subtitleSize space-y-3  pl-6 ">
                <li>
                  auctionType (string) - Specifies the auction type (all, live,
                  closed, upcoming, archived)
                </li>
                <li>
                  limit (integer) - The max number of listings you want to get
                  in a single page (e.g. limit: 10 will display 10 results per
                  page)
                </li>
                <li>
                  offset (integer) - The page number of the result you want to
                  get (e.g. offset: 0 for the first page)
                </li>
              </div>
            </div>
          </section>
          <CodeBlock />
          <SecCopyber />
          <LastCodeBlock />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
