import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const contentData = [
  {
    id: "1",
    key: "Shell",
    value:
      "curl -X GET 'https://api.vendidit.com/main/public/customers/products' \
  -d 'auctionType=live' \
  -d 'limit=10' \
  -d 'offset=0'",
  },
  {
    id: "2",
    key: "Javascript",
    value: `fetch('https://api.vendidit.com/main/public/customers/products?auctionType=live&limit=10&offset=0', {
    method: 'GET',
    headers: {
      'accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))`,
  },
];
const SecCopyber = () => {
  const [activeContent, setActiveContent] = useState(contentData[0]);
  const [activeKey, setActiveKey] = useState("");
  console.log(activeContent.key == "Character" ? "red" : "none");

  // Content data for buttons

  // Function to handle copying content
  const handleCopy = () => {
    navigator.clipboard.writeText(`${activeContent.value}`);
    toast.success("copied to clipboard");
  };
  const handleclick = (key) => {
    if (key == "Shell") {
      setActiveContent(contentData[0]);
    } else if (key == "Javascript") {
      setActiveContent(contentData[1]);
    }
  };

  return (
    <div className="mt-16">
      <div className="bg-[#232323] text-white p-4 rounded-md   w-full">
        <div className="flex mb-4 ">
          {contentData.map((item) => (
            <button
              onClick={() => handleclick(item.key)}
              className="px-4 py-1 mr-5 rounded-full text-white border border-white text-[13px] "
              style={{
                backgroundColor:
                  item.key == activeContent.key ? "gray" : "transparent",
              }}
            >
              {item.key}
            </button>
          ))}
        </div>

        {activeContent && (
          <div className="bg-[#232323] rounded">
            <p>{activeContent.value}</p>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="px-4 py-1 flex gap-x-1 rounded-full bg-white text-black text-[13px]  ml-auto  active:bg-transparent active:border  active:text-white active:outline-0"
            >
              <MdContentCopy size={18} />
              Copy
              <ToastContainer position="bottom-right" autoClose={3000} />
            </button>
          </div>
        )}
      </div>
      <div className=" lg:w-[700px] sm:w-full">
        <h1 className="text-[32px] mt-[70px]">
          <a id="order">Order List</a>
        </h1>
        <p className="mt-[15px] text-[18px] text-mdFont ">
          This example demonstrates how to use the order list api to get all the
          orders. Be sure to replace "your-api-key" with your actual API key.
        </p>
        <p className=" text-[#151414] mt-[30px] text-[20px]">
          Query parameters:
        </p>
        <li className="text-mdFont text-subtitleSize  pl-6 mt-[15px]">
          startTime (epoch time) - Start time of a time range (e.g: 1727114400)
        </li>
        <li className="text-mdFont text-subtitleSize  pl-6 mt-[15px]">
          endTime (epoch time) - End time of a time range (e.g: 1727715600)
        </li>
        <li className="text-mdFont text-subtitleSize  pl-6 mt-[15px]">
          limit (integer) - The max number of listings you want to get in a
          single page (e.g. limit: 10 will display 10 results per page)
        </li>
        <li className="text-mdFont text-subtitleSize  pl-6 mt-[15px]">
          offset (integer) - The page number of the result you want to get (e.g.
          offset: 0 for the first page)
        </li>
        <p className=" text-[#151414] mt-[15px] text-[20px]">Headers:</p>
        <li className="text-mdFont text-subtitleSize  pl-6 mt-[15px]">
          api-key (string) - API key provided by vendidit team
        </li>
      </div>
    </div>
  );
};

export default SecCopyber;
