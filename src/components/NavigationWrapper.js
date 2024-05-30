import React, { useEffect, useState } from "react";
import VerticalMenu from "./VerticalMenu";
import HorizontalMenu from "./HorizontalMenu";
import { menus } from "../config";

const NavigationWrapper = ({ setCurrentLayout, currentLayout, children }) => {
  const [currentMenu, setCurrentMenu] = useState(
    localStorage.getItem("menu") || "vertical"
  );
  useEffect(() => {
    var current = localStorage.getItem("menu");
    current && setCurrentMenu(current);
  }, [currentMenu]);
  return (
    <div className="min-h-screen">
      <div className="flex flex-grow">
        {currentMenu === "vertical" && (
          <VerticalMenu
            setCurrentLayout={setCurrentLayout}
            currentLayout={currentLayout}
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu}
            menuItems={menus.vertical}
          />
        )}
        <div className="flex-grow">
          {currentMenu === "horizontal" && (
            <HorizontalMenu
              setCurrentLayout={setCurrentLayout}
              currentLayout={currentLayout}
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
              menuItems={menus.horizontal}
            />
          )}
          <div className="p-6 bg-gray-100">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationWrapper;
