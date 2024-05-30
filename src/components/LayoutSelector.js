import React from "react";
import LoginLayout1 from "../layouts/LoginLayout1";
import LoginLayout2 from "../layouts/LoginLayout2";
import LoginLayout3 from "../layouts/LoginLayout3";
import SignupLayout1 from "../layouts/SignupLayout1";
import SignupLayout2 from "../layouts/SignupLayout2";
import SignupLayout3 from "../layouts/SignupLayout3";
import DashboardLayout1 from "../layouts/DashboardLayout1";
import DashboardLayout2 from "../layouts/DashboardLayout2";
import DashboardLayout3 from "../layouts/DashboardLayout3";

const LayoutSelector = ({ layout, children }) => {
  switch (layout) {
    case "LoginLayout1":
      return <LoginLayout1>{children}</LoginLayout1>;
    case "LoginLayout2":
      return <LoginLayout2>{children}</LoginLayout2>;
    case "LoginLayout3":
      return <LoginLayout3>{children}</LoginLayout3>;
    case "SignupLayout1":
      return <SignupLayout1>{children}</SignupLayout1>;
    case "SignupLayout2":
      return <SignupLayout2>{children}</SignupLayout2>;
    case "SignupLayout3":
      return <SignupLayout3>{children}</SignupLayout3>;
    case "DashboardLayout1":
      return <DashboardLayout1>{children}</DashboardLayout1>;
    case "DashboardLayout2":
      return <DashboardLayout2>{children}</DashboardLayout2>;
    case "DashboardLayout3":
      return <DashboardLayout3>{children}</DashboardLayout3>;
    default:
      return <>{children}</>;
  }
};

export default LayoutSelector;
