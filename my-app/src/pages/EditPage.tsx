import React, { useEffect, useState } from "react";
import { deletePost, editPost } from "../api/api";
import ModalFrom from "../common/ModalFrom";
import PostCard from "../components/PostCard/PostCard";
import {
  deletePostTC,
  editPostTC,
  fetchPostsTC,
  removePostAC,
} from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./EditPage.scss";

const EditPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const [editing, setEditing] = useState<string>("");
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsTC());
  }, []);

  const handleEdit = (id: string) => {
    setEditing(id);
    setShowPopUp(true)
  };

  const handleDelete = (id: string) => {
    dispatch(deletePostTC(id));
  };


  return (
    <div className="EditPage">
      {posts.map((p) => (
        <React.Fragment key={p.id}>
          {editing === p.id ? (
            <section>{showPopUp && <ModalFrom setShowPopUp={setShowPopUp} setEditing={setEditing} id={editing}/>}</section>
          ) : (
            <section>
              <PostCard
                key={p.id}
                name={p.name}
                description={p.description}
                image={p.image}
                
              />
              <button onClick={() => handleEdit(p.id)}>Edit</button>
              <button onClick={() => handleDelete(p.id)}>Delete</button>
            </section>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default EditPage;
