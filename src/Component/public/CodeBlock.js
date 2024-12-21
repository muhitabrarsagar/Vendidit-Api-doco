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
const CodeBlock = () => {
  const [activeContent, setActiveContent] = useState(contentData[0]);
  const [activeKey, setActiveKey] = useState("");
  console.log(activeContent.key == "Character" ? "red" : "none");

  // Content data for buttons

  // Function to handle copying content
  const handleCopy = () => {
    navigator.clipboard.writeText(`${activeContent.value}`);
    toast.success("copied to clipboard!");
  };
  const handleclick = (key) => {
    if (key == "Shell") {
      setActiveContent(contentData[0]);
    } else if (key == "Javascript") {
      setActiveContent(contentData[1]);
    }
  };

  return (
    <div className="mt-16  ">
      <div className="bg-[#232323] text-white p-4 rounded-md ">
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
      <div>
        <h1 className="text-[32px] mt-[70px]">
          <a id="listing" className="transition duration-300">
            Listing Details
          </a>
        </h1>
        <p className="mt-[15px] text-[18px] text-mdFont ">
          This example demonstrates how to get details of a single listing using
          the listing details API
        </p>

        <p className=" text-[151414] mt-[30px] text-[20px]">Path Parameters:</p>
        <li className="text-mdFont text-subtitleSize  pl-6 mt-[15px]">
          productId - An integer number resembling the product id you want to
          fetch
        </li>
      </div>
    </div>
  );
};

export default CodeBlock;
