import React, { useState } from "react";

const DashboardLayout1 = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="bg-[#EF7167] rounded text-white p-4">
        <div className="text-xl py-2 px-4 font-bold">INFORMICS DASHBOARD</div>
        <div className="mt-4">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 1
                ? "bg-white bg-opacity-40"
                : "bg-white bg-opacity-20"
            } hover:bg-[#EF7167]`}
            onClick={() => setActiveTab(1)}
          >
            Tab 1
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 2
                ? "bg-white bg-opacity-40"
                : "bg-white bg-opacity-20"
            } hover:bg-[#EF7167] ml-4`}
            onClick={() => setActiveTab(2)}
          >
            Tab 2
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === 3
                ? "bg-white bg-opacity-40"
                : "bg-white bg-opacity-20"
            } hover:bg-[#EF7167] ml-4`}
            onClick={() => setActiveTab(3)}
          >
            Tab 3
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout1;
