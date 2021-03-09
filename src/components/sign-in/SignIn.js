import React, { useState } from "react";
import CustomButtom from "../custom-button/CustomButtom";
import FormInput from "../form-input/FormInput";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <div className="title">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={(e) => {
            setEmail(e);
          }}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={(e) => {
            setPassword(e);
          }}
          label="Password"
          required
        />

        <CustomButtom type="submit">Sign In</CustomButtom>
      </form>
    </div>
  );
};

export default SignIn;
