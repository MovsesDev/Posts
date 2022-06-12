import React, { SetStateAction, useState } from "react";
import { addNewPostTC } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import './AddPostForm.scss'
interface AddPostFormProps {
    isAddPostVisible: boolean,
    setIsPopupVisible: React.Dispatch<SetStateAction<boolean>>
}

const AddPostForm: React.FC<AddPostFormProps> = ({isAddPostVisible, setIsPopupVisible}) => {
  const [user, setUser] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useAppDispatch();

  const userId = useAppSelector((state) => state.posts.userId);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      name: user,
      description,
      author: userId,
    };
    dispatch(addNewPostTC(post));
    setUser("");
    setDescription("");
    setIsPopupVisible(false)
  };

  return (
    <React.Fragment>
        {isAddPostVisible ? (<form className="form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={user as string}
          onChange={(e) => setUser(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          value={description as string}
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <br />
        <button onClick={handleSubmit}>Add post</button>
      </form>) : ''}
      
    </React.Fragment>
  );
};

export default AddPostForm;
