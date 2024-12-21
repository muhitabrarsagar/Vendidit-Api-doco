import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const contentData = [
  {
    id: "1",
    key: "Shell",
    value:
      "curl -X 'GET' \
      'https://partners.api.vendidit.com/main/public/flareAI?startTime=<startTime>&endTime=<endTime>&offset=0&limit=10' \
      -H 'accept: application/json' \
      -H 'api-key: YOUR_API_KEY'",
  },
  {
    id: "2",
    key: "Javascript",
    value: `fetch('https://partners.api.vendidit.com/main/public/flareAI?startTime=<startTime>&endTime=<endTime>&offset=0&limit=10', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'api-key': 'YOUR_API_KEY'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))`,
  },
];
const LastCodeBlock = () => {
  const [activeContent, setActiveContent] = useState(contentData[0]);
  const [activeKey, setActiveKey] = useState("");
  console.log(activeContent.key == "Character" ? "red" : "none");

  // Content data for buttons

  // Function to handle copying content
  const handleCopy = () => {
    navigator.clipboard.writeText(`${activeContent.value}`);
    toast.success("Content copied to clipboard!");
  };
  const handleclick = (key) => {
    if (key == "Shell") {
      setActiveContent(contentData[0]);
    } else if (key == "Javascript") {
      setActiveContent(contentData[1]);
    }
  };

  return (
    <div className="mt-16 ">
      <div className="bg-[#232323] text-white p-4 rounded-md   ">
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

          {/* 
          <button
            onClick={() => {
              setActiveContent(contentData[1]);
            }}
            className="px-4 py-1 rounded-full bg-white text-black text-[13px]"
            style={{
              backgroundColor:
                activeContent.key == "Character" ? "red" : "none",
            }}
          >
            JavaScript
          </button> */}
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
            </button>
            <ToastContainer position="bottom-right" autoClose={3000} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LastCodeBlock;
