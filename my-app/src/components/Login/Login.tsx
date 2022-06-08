import React, { useState } from "react";
import { loginTC } from "../../features/PostSlice";
import * as s from "../Register/RegisterStyled";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    loginTC(user);
    navigate('/')
  };

  return (
    <s.Register>
      <s.Form>
        <s.Label htmlFor="email">Email</s.Label>
        <s.Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <s.Label htmlFor="password">Password</s.Label>
        <s.Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <s.Button onClick={handleSubmit}>Sign In</s.Button>
      </s.Form>
      <s.Paragraph>
        Dont have an account?{" "}
        <s.NavlinkBtn to="/register">Sign Up</s.NavlinkBtn>
      </s.Paragraph>
    </s.Register>
  );
};

export default Login;
