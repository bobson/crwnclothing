import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import CustomButtom from "../custom-button/CustomButtom";
import FormInput from "../form-input/FormInput";

import "./sign-in.styles.scss";

import { auth, signInWithGoogle } from "../../firebase/firebase.util";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succsess, setSuccsess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
      setSuccsess(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (succsess) return <Redirect to="/" />;

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
          handleChange={(e) => setEmail(e.target.value)}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
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
