import React from "react";
import { useNavigate } from "react-router-dom";
import ModalFrom from "../../common/EditForm";
import { setIsAuth } from "../../features/PostSlice";
import { useAppDispatch } from "../../hooks";
import './Logout.scss'



const Logout = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(setIsAuth(false))
        navigate("/")
    }
    const dispatch = useAppDispatch()
  return (
    <div className="modalLogout">
      <div className="modalLogout-inner">
          <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
