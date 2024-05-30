import React from "react";

const LoginLayout3 = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white py-8 px-12 rounded-lg shadow-lg w-full max-w-sm ">
        <h2 className="text-3xl font-bold mb-6">Let's Get Started</h2>
        {children}
      </div>
      <footer className="mt-8 text-gray-600"></footer>
    </div>
  );
};

export default LoginLayout3;
