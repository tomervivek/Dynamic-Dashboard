import React, { useState } from "react";

const DashboardLayout3 = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="">
      <div className="bg-[#EF7167]   text-white p-4 pb-0 ">
        <div className="text-xl py-2 px-4 font-bold">INFORMICS DASHBOARD</div>
        <div className="mt-4 flex">
          <button
            className={`flex-1 px-4 py-2 rounded-none border-b border-b-2 ${
              activeTab === 1
                ? "bg-white bg-opacity-40 "
                : "bg-white bg-opacity-20"
            } hover:bg-[#EF7167]`}
            onClick={() => setActiveTab(1)}
          >
            Tab 1
          </button>
          <button
            className={`flex-1 px-4 py-2 rounded-none border-b border-b-2 ${
              activeTab === 2
                ? "bg-white bg-opacity-40 "
                : "bg-white bg-opacity-20"
            } hover:bg-[#EF7167]`}
            onClick={() => setActiveTab(2)}
          >
            Tab 2
          </button>
          <button
            className={`flex-1 px-4 py-2 rounded-none border-b border-b-2 ${
              activeTab === 3
                ? "bg-white bg-opacity-40"
                : "bg-white bg-opacity-20"
            } hover:bg-[#EF7167]`}
            onClick={() => setActiveTab(3)}
          >
            Tab 3
          </button>
        </div>
      </div>
      <div className="border border-t-0  border-dashed border-2 border-[#EF7167]">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout3;
