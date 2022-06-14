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
  margin-bottom: 2rem;
  font-size: 1.5rem;
`

export const Form = styled.form`
position: relative;
background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  min-height: 300px;
  height: 400px;
  border-radius: 5px;
  width: 400px;
  max-width: 450px;
  overflow: hidden;
`;

export const Label = styled.label`
`;


export const Input = styled.input`
  height: 1.8rem;
  width: 100%;
  padding: 2px;
  border: 1px solid;
  border-radius: 2px;
  background-color: none;
  &:focus  {
    box-shadow: 0 0 9px blue;
  border: 1px outset blue;
  transition: 0.1s ease;
  }
`;

export const Button = styled.button`
position: absolute;
bottom: 1rem;
  display: inline-block;
  background-color: #3a86ff;
  text-align: center;
  width: 70%;
  height: 10%;
  border: 1px solid black;
  border-radius: 3px;
  text-decoration: none;
  transition: 0.1s ease;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #1363DF;
  }
`;

export const NavlinkBtn = styled(NavLink)`
 text-decoration: none;
 color: #fb8500;
`

export const Paragraph = styled.p`
  color: white;
  font-size: 1rem;
`;

export const [Email, Password] = Array(2).fill(styled.div`
display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 80%;
`)