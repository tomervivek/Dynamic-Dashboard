import React from "react";

const SignupLayout3 = ({ children }) => {
  return (
    <div className="flex items-center sm:max-h-screen justify-center ">
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        {children}
      </div>
    </div>
  );
};

export default SignupLayout3;
