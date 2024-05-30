import React from "react";

const SignupLayout1 = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center  sm:p-8 p-4 bg-cover bg-opacity-60 bg-center"
      style={{
        backgroundImage: "url('/beautiful-landscape.avif')",
      }}
    >
      <div className="bg-white bg-opacity-75 p-10 py-28 rounded-lg shadow-lg max-w-md w-full">
        {children}
      </div>
    </div>
  );
};

export default SignupLayout1;
