import React, { useState } from "react";
import CustomButtom from "../custom-button/CustomButtom";
import FormInput from "../form-input/FormInput";

import "./sign-in.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.util";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
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
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButtom type="submit">Sign In</CustomButtom>
          <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButtom>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
