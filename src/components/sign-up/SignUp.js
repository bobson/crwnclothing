import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import CustomButtom from "../custom-button/CustomButtom";
import FormInput from "../form-input/FormInput";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [succsess, setSuccsess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");
    } catch (error) {
      console.error(error);
    }
  };

  if (succsess) return <Redirect to="/" />;

  return (
    <div className="sign-up">
      <div className="title">
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password</span>
      </div>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          label="DIsplay Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          label="Confirm Password"
          required
        />
        <CustomButtom type="submit">Sign Up</CustomButtom>
      </form>
    </div>
  );
};

export default SignUp;
