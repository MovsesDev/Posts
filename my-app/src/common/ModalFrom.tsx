import React, { Dispatch, SetStateAction, useState } from "react";
import { editPostTC } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./ModalFrom.scss";

interface ModalFormProps {
  setEditing: (id: string) => void;
  id: string;
  setShowPopUp: (popUp: boolean) => void;
  name: string;
  desc: string
}

const ModalFrom: React.FC<ModalFormProps> = ({
  setEditing,
  id,
  setShowPopUp,
  name,
  desc
}) => {
  const [user, setUser] = useState(name);
  const [description, setDescription] = useState(desc);
  const dispatch = useAppDispatch();

  const handleEditSubmit = (id: string) => {
    const post = {
      id,
      name: user,
      description,
    };
    dispatch(editPostTC(post));
    setEditing("");
  };

  return (
    <div className="ModalForm">
      <form className="form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <div className="buttons">
          <button onClick={() => handleEditSubmit(id)}>Submit</button>
          <button onClick={() => setShowPopUp(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ModalFrom;
