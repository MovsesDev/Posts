import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {login, signup } from "../../api/api";
import * as s from "./RegisterStyled";
const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

const navigate = useNavigate()

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signup(email, password)
    navigate('/login')
    
  };

  return (
    <s.Register>
      <s.Form>
        <s.Label htmlFor="email">Email</s.Label>
        <s.Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <s.Label htmlFor="password">Password</s.Label>
        <s.Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <s.Button onClick={handleSubmit}>Sign up</s.Button>
      </s.Form>
      <s.Paragraph>
        Already have an account? <s.NavlinkBtn  to="/login">Sign in</s.NavlinkBtn>
      </s.Paragraph>
    </s.Register>
  );
};

export default Register;
