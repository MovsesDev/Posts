import React, { useState } from "react";
import { addNewPostTC } from "../features/PostSlice";
import { useAppDispatch } from "../hooks";
import "./MyPostPage.scss";

const MyPostPage: React.FC = () => {
  const [user, setUser] = useState<string | null>("");
  const [description, setDescription] = useState<string | null>(null);
const dispatch = useAppDispatch()
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      name: user,
      description,
    };
    dispatch(addNewPostTC(post));
    setUser("");
    setDescription("");
  };

  

  return (
    <div className="MyPosts">
      <form className="form">
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
      </form>
    </div>
  );
};

export default MyPostPage;
