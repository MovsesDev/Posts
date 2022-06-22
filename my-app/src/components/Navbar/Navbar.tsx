import React from "react";
import { useAppSelector } from "../../hooks";
import { LogoutBtn, Nav, NavBtn, Wrapper, Menu, Content } from "./NavbarStyled";
import "./NavbarStyled.ts";





const Navbar: React.FC = () => {
  const isAuth = useAppSelector((state) => state.posts.isAuth);
  return (
    <Wrapper>
      <Content>

      <Menu>

      <NavBtn to='/'>Main</NavBtn>
      <NavBtn to='/myPosts'>My Posts</NavBtn> 
      </Menu>
      {isAuth ? (
<LogoutBtn to='/logout'>Log Out</LogoutBtn>
      ) : (<Nav> 
        <NavBtn to='/register'>Sign ip</NavBtn>
        <NavBtn to='/login'>Sign in</NavBtn>
      </Nav>)}
      </Content>
    </Wrapper>
  );
};

export default Navbar;
