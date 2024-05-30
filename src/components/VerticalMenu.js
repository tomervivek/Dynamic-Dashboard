import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const VerticalMenu = ({
  menuItems,
  setCurrentMenu,
  currentMenu,
  setCurrentLayout,
  currentLayout,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-between text-white bg-[#34BE82]">
      <div className="sm:hidden p-4 flex justify-between items-center bg-[#34BE82]">
        <button className="text-white" onClick={() => setDrawerOpen(true)}>
          <FaBars className="w-6 h-6" />
        </button>
      </div>

      <div className="hidden h-screen sm:flex flex-col gap-2 justify-between p-4">
        {menuItems.map((item, index) => (
          <a
            href={`/${item.toLowerCase()}`}
            key={index}
            className="block py-2 px-4 hover:bg-opacity-30  bg-white bg-opacity-20 rounded cursor-pointer"
          >
            {item}
          </a>
        ))}

        <div className=" mt-auto mb-4">
          <div className="mb-4">
            <label className="block mb-2">Select Layout:</label>
            <select
              value={currentLayout}
              onChange={(e) => setCurrentLayout(e.target.value)}
              className="p-2 border w-full outline-none border-[#EF7167] rounded text-[#EF7167]"
            >
              <option value={0}>Layout 1</option>
              <option value={1}>Layout 2</option>
              <option value={2}>Layout 3</option>
            </select>
          </div>
          <button
            className={`p-2  w-full px-6  bg-[#EF7167] text-white rounded-lg`}
            onClick={() => {
              localStorage.setItem("menu", "horizontal");
              setCurrentMenu("horizontal");
            }}
          >
            Horizontal Menu
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          drawerOpen
            ? "bg-gray-900 bg-opacity-50"
            : "bg-transparent pointer-events-none"
        }`}
      >
        <div
          className={`fixed left-0 top-0 w-64 bg-[#34BE82] text-white h-full z-50 p-4 flex flex-col justify-between transform transition-transform duration-500 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <div className="flex justify-between  items-center mb-4">
              <h2 className="text-xl">INFORMICS</h2>
              <button onClick={() => setDrawerOpen(false)}>
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <nav>
              {menuItems.map((item, index) => (
                <a
                  href={`/${item.toLowerCase()}`}
                  key={index}
                  className="block py-2 px-4 mb-2  bg-white bg-opacity-20 rounded cursor-pointer"
                  onClick={() => setDrawerOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="mb-4">
            <div className="mb-4">
              <label className="block mb-2">Select Layout:</label>
              <select
                value={currentLayout}
                onChange={(e) => setCurrentLayout(e.target.value)}
                className="p-2 border w-full outline-none border-[#EF7167] rounded text-[#EF7167]"
              >
                <option value={0}>Layout 1</option>
                <option value={1}>Layout 2</option>
                <option value={2}>Layout 3</option>
              </select>
            </div>
            <button
              className={`p-2 text-nowrap w-full px-6 ${
                currentMenu === "horizontal"
                  ? "bg-[#EF7167] text-white"
                  : "bg-[#EF7167] text-white"
              } rounded-lg`}
              onClick={() => {
                localStorage.setItem("menu", "horizontal");
                setCurrentMenu("horizontal");
                setDrawerOpen(false);
              }}
            >
              Horizontal Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalMenu;
