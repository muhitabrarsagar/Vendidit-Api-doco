import React from "react";

const About = () => {
  return (
    <div
      className="
      "
    >
      <div className="flex lg:flex">
        <div className="lg:flex lg:flex-col hidden lg:space-y-2">
          {/* Black Line */}
          <div className="h-2 w-16 bg-black rounded"></div>

          {/* Gray Lines */}
          {[...Array(12)].map((_, index) => (
            <div key={index} className="h-2 w-16 bg-gray-300 rounded"></div>
          ))}
        </div>
        <div className=" lg:w-wath lg:pl-16 lg:mt-0 mt-10 w-full ">
          <h2 className="font-semibold text-titleSize ">
            What does Vendidit do?
          </h2>

          <p className="mt-4 text-mdFont leading-loose text-subtitleSize">
            Vendidit connects resellers and consumers in the secondary market by
            providing robust APIs that allow users to access listings, manage
            orders, and integrate data into their platforms. Our tools simplify
            processes in the $800B reverse logistics sector, helping businesses
            optimize their operations and grow their impact.
          </p>
        </div>
      </div>
      <div>
        <div className="lg:pl-32 pt-10  lg:px-10 px:6 w-full ">
          <h1 className="font-semibold text-titleSize">
            How does Vendidit contribute to your business?
          </h1>
          <p className="text-mdFont text-subtitleSize mt-4 leading-loose ">
            Vendidit provides a comprehensive API suite that gives businesses
            access to key marketplace data, including Listings and Orders. These
            APIs enable companies to integrate valuable functionality into their
            platforms and streamline operations. With Vendidit, you can:
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
                limit (integer) - The max number of listings you want to get in
                a single page (e.g. limit: 10 will display 10 results per page)
              </li>
              <li>
                offset (integer) - The page number of the result you want to get
                (e.g. offset: 0 for the first page)
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
