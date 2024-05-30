import React, { useState } from "react";
import NavigationWrapper from "../components/NavigationWrapper";
import { layouts } from "../config";
import LayoutSelector from "../components/LayoutSelector";
const Dashboard = () => {
  const [currentLayout, setCurrentLayout] = useState(0);

  return (
    <NavigationWrapper
      setCurrentLayout={setCurrentLayout}
      currentLayout={currentLayout}
    >
      <LayoutSelector layout={layouts.dashboard[currentLayout]}>
        <div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4">
              <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center  h-40">
                Box 1
              </div>
              <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center  h-40">
                Box 2
              </div>
              <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center  h-40">
                Box 3
              </div>
              <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center  h-40">
                Box 1
              </div>
              <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center  h-40">
                Box 2
              </div>
              <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center  h-40">
                Box 3
              </div>
            </div>
          </div>
        </div>
      </LayoutSelector>
    </NavigationWrapper>
  );
};

export default Dashboard;
