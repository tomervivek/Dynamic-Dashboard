import React from "react";

const LoginLayout2 = ({ children }) => {
  return (
    <div className="max-w-sm  border shadow rounded mx-auto sm:my-28  p-4 border-[#EF7167]">
      <div>
        <div className="text-xl text-[#EF7167] font-bold mb-2">Login</div>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout2;
