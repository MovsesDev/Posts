import React, { Component, ComponentElement, Dispatch, SetStateAction, useState } from "react";
import { editPostTC } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./EditForm.scss";

interface EditFormProps {
post: object | null
onSubmitSuccess() : void
}

const EditForm: React.FC<EditFormProps> = ({
post,
onSubmitSuccess
}) => {
  const [user, setUser] = useState("name");
  const [description, setDescription] = useState("desc");
  const dispatch = useAppDispatch();

  const handleEditSubmit = (id: string) => {
  //   const post = {
  //     id,
  //     name: user,
  //     description,
  //   };
  //     dispatch(editPostTC(post));    
  //   setEditing("");
  };

  return (
    <div className="editForm">
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
          <button onClick={() => handleEditSubmit('f')}>Submit</button>
          <button>Cancel</button>
        </div>
      </form>
      
    </div>
  );
};

export default EditForm;
