import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #bde0fe;
  height: 50px;
  z-index: 1;
`;

export const Content = styled.div`
padding-right: 80px;
display: flex;
align-items: center;
`

export const Menu = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavBtn = styled(NavLink)`
  margin: 5px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  padding: 2px;
  transition: all 0.25s;

  &:hover {
    color: #fb5607;
  }
`;

export const LogoutBtn = styled(NavLink)`
  margin: 0;
  margin-left: 10px;
  margin-right: 10px;
  padding: 1px;
  color: white;
  padding: 5px;
  transition: 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    text-align: center;
    color: white;
    background-color: blue;
    border-radius: 3px;
  }
`;

export const Nav = styled.div`
  margin-left: 10px;
  border-left: 1px solid gray;

  & a:last-child {
    margin: 0;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    background-color: blue;
    padding: 4px 18px;
    border-radius: 2px;

    &:hover {
      text-align: center;
      background: none;
      color: white;
      border-radius: 3px;
      transition: all 0.2s;
    }
  }

  & a:first-child {
    margin: 0;
    margin-left: 10px;
    margin-right: 10px;
    color: black;
    background-color: white;
    padding: 4px 18px;
    border-radius: 2px;

    &:hover {
      text-align: center;
      background: none;
      color: white;
      border-radius: 3px;
      transition: all 0.2s ease;
    }
  }
`;
