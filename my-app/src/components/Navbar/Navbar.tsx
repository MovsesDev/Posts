import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const isAuth = useAppSelector((state) => state.posts.isAuth);
  return (
    <div className="navbar">
      <NavLink to="/"> Main</NavLink>
      <NavLink  to="/myPosts">
        My posts
      </NavLink>
      <NavLink to="/editPost"> Edit post</NavLink>
      {isAuth ? (
        <NavLink to="/logout">Log out</NavLink>
      ) : (
        <nav>
          <NavLink to="/register"> Sign up</NavLink>
          <NavLink to="/login"> Sign in</NavLink>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
