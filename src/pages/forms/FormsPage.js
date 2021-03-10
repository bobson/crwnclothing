import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import "./forms.styles.scss";

const FormsPage = () => {
  return (
    <div className="forms">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default FormsPage;
