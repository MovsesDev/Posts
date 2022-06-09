import React, { useState } from "react";
import PostCard from "../components/PostCard/PostCard";
import { addNewPostTC } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./MyPostPage.scss";

const MyPostPage: React.FC = () => {
  const [user, setUser] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.posts.isAuth);
  const posts = useAppSelector((state) => state.posts.posts);
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
  };

  return (
    <div className="MyPosts">
      {posts.map((p) =>
        isAuth && p.author === userId ? (
          <PostCard post={p}/>
        ) : (
          <div>No posts</div>
        )
      )}
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
