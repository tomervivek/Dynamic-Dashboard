import React from "react";

const LoginLayout1 = ({ children }) => {
  return (
    <div
      className="flex items-center justify-center rounded bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/full-shot.avif')",
      }}
    >
      <div className="bg-white bg-opacity-75 p-10 py-28 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Welcome Back
        </h2>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout1;
