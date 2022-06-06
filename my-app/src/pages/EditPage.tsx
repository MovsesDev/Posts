import React, { useEffect, useState } from "react";
import { deletePost, editPost } from "../api/api";
import PostCard from "../components/PostCard/PostCard";
import { receivePosts } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./EditPage.scss";

const EditPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const [editing, setEditing] = useState("");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(receivePosts());
  }, [posts]);

  const handleEdit = (id: string) => {
    setEditing(id);
  };

  const handleEditSubmit = (id: string) => {
    editPost(id, user, description)
    setEditing('')
    setDescription('')
    setUser('')
  };

  return (
    <div className="EditPage">
      {posts.map((p) => (
        <div>
          {editing === p.id ? (
            <section>
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
              <button onClick={() => handleEditSubmit(p.id)}>Submit</button>
            </section>
          ) : (
            <section>
              <PostCard
                name={p.name}
                description={p.description}
                image={p.image}
              />
              <button onClick={() => handleEdit(p.id)}>Edit</button>
              <button onClick={() => deletePost(p.id)}>Delete</button>
            </section>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditPage;
