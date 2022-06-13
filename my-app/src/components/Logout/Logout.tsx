import React from "react";
import { useNavigate } from "react-router-dom";
import ModalFrom from "../../common/EditForm";
import { setIsAuth } from "../../features/PostSlice";
import { useAppDispatch } from "../../hooks";
import "./Logout.scss";

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(setIsAuth(localStorage.length !== 0 ? true : false))
    navigate("/");
  };
  return (
    <div className="modalLogout">
      <div className="modalLogout-inner">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
