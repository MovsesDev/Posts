import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/api";
import * as s from "./RegisterStyled";
const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userError, setUserError] = useState<string | null>("Email cannot be empty");
  const [passwordError, setPasswordError] = useState<string | null>('Password cannot be empty');
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [userDirty, setUserDirty] = useState<boolean>(false);
  const [validForm, setValidForm] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (passwordError || userError) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [passwordError, userError]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signup(email, password);
    navigate("/login");
  };

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setUserDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setUserError(email + " is not a valid email address.");
    } else {
      setUserError("");
    }
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regex.test(e.target.value)) {
      setPasswordError("Passwords must contain at least eight characters, including at least 1 letter and 1 number.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <s.Register>
      <s.Form onSubmit={handleSubmit}>
        <s.Title> Sign Up</s.Title>

        <s.Email>
          <s.Label htmlFor="email">Email</s.Label>
          <s.Input
            placeholder="Email"
            onBlur={(e) => onBlurHandler(e)}
            name="email"
            type='text'
            value={email}
            onChange={(e) => userHandler(e)}
          />  
          {userDirty && userError && (
            <p style={{ color: "red",  fontSize: '12px'}}>{userError}</p>
          )}
        </s.Email>
        <s.Password>
          <s.Label htmlFor="password">Password</s.Label>
          <s.Input
            placeholder="Password"
            onBlur={(e) => onBlurHandler(e)}
            type='password'
            name="password"
            value={password}
            onChange={(e) => passwordHandler(e)}
          />
          {passwordDirty && passwordError && (
            <p style={{ color: "red",  fontSize: '12px'}}>{passwordError}</p>
          )}
        </s.Password>
        <s.Button disabled={!validForm} onSubmit={handleSubmit}>
          Sign up
        </s.Button>
      </s.Form>
      <s.Paragraph>
        Already have an account?{" "}
        <s.NavlinkBtn to="/login">Sign in</s.NavlinkBtn>
      </s.Paragraph>
    </s.Register>
  );
};

export default Register;
