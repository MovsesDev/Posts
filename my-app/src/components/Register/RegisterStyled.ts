import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";


export const Register = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 15, 16, 0.4);
`;

export const Title = styled.div`
  margin-bottom: 35px;
  font-size: 25px
`

export const Form = styled.form`
background-color: white;
  display: flex;
  text-align: center;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 400px;
  min-height: 300px;
  border-radius: 5px;
  width: 350px;
`;

export const Label = styled.label``;


export const Input = styled.input`
  height: 30px;
  width: 300px;
  padding: 2px;
  border: 2px solid;
  border-radius: 2px;
  background-color: none;
`;

export const Button = styled.button`
  margin-top: 50px;
  display: inline-block;
  background-color: aqua;
  text-align: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  transition: 0.1s ease;
  color: black;
  &:hover {
    font-size: 14px;
    padding: 7px;
  }
`;

export const NavlinkBtn = styled(NavLink)`
 text-decoration: none;
 color: #fb8500;
`

export const Paragraph = styled.p`
  color: white;
  font-size: 20px;
`;

