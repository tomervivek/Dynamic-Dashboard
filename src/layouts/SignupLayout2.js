import React from "react";

const SignupLayout2 = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div
        className="md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/SideImage.avif')",
        }}
      ></div>
      <div className="md:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SignupLayout2;
