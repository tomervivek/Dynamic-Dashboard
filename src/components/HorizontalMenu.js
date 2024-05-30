import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const HorizontalMenu = ({
  menuItems,
  setCurrentMenu,
  setCurrentLayout,
  currentLayout,
}) => {
  return (
    <div className="bg-[#34BE82] text-white p-4 flex justify-between items-center">
      <div className="flex">
        {menuItems.map((item, index) => (
          <a
            href={`/${item.toLowerCase()}`}
            key={index}
            className="py-2 px-4 hover:bg-white hover:bg-opacity-20 rounded cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="sm:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#EF7167] px-3 py-2
             text-sm font-semibold text-white shadow-sm  hover:bg-opacity-80"
            >
              Menus
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-white"
                aria-hidden="true"
              />
            </MenuButton>
          </div>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  <div
                    onClick={() => {
                      localStorage.setItem("menu", "vertical");
                      setCurrentMenu("vertical");
                    }}
                    className="bg-gray-100 text-gray-900 border-b pb-3 block px-4 py-2 text-sm"
                  >
                    Vertical Navigation
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    onClick={() => {
                      setCurrentLayout(0);
                    }}
                    className="bg-gray-100 text-gray-900 block px-4 py-2 text-sm"
                  >
                    Layout 1
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    onClick={() => {
                      setCurrentLayout(1);
                    }}
                    className="bg-gray-100 text-gray-900 block px-4 py-2 text-sm"
                  >
                    Layout 2
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    onClick={() => {
                      setCurrentLayout(2);
                    }}
                    className="bg-gray-100 text-gray-900 block px-4 py-2 text-sm"
                  >
                    Layout 3
                  </div>
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
      <div className="hidden sm:flex items-center">
        <div className="mr-4">
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
          className={`p-2 w-[100px] hover:opacity-90 bg-[#EF7167] text-white rounded-lg`}
          onClick={() => {
            localStorage.setItem("menu", "vertical");
            setCurrentMenu("vertical");
          }}
        >
          Vertical
        </button>
      </div>
    </div>
  );
};

export default HorizontalMenu;
