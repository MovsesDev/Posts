import React, { useEffect, useState } from "react";
import { loginTC, setUserId } from "../../features/PostSlice";
import * as s from "../Register/RegisterStyled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.posts.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(loginTC(user));
  };

  return (
    <s.Register>
      <s.Form>
        <s.Title>Sign In</s.Title>
        <s.Email>

          <s.Label htmlFor="email">Email</s.Label>
          <s.Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </s.Email>
        <s.Password>

          <s.Label htmlFor="password">Password</s.Label>
          <s.Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </s.Password>
        <s.Button onClick={handleSubmit}>Sign In</s.Button>
      </s.Form>
      <s.Paragraph>
        Dont have an account?
        <s.NavlinkBtn to="/register">Sign Up</s.NavlinkBtn>
      </s.Paragraph>
    </s.Register>
  );
};

export default Login;
