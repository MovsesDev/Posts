import React, { useEffect, useState } from "react";
import EditForm from "../common/EditForm";
import ModalForm from "../common/EditForm";
import Modal from "../common/Modal";
import PostCard from "../components/PostCard/PostCard";
import { deletePostTC, fetchPostsTC } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./EditPage.scss";

const EditPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const [currentPost, setCurrentPost] = useState<object | null>(null);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsTC());
  }, []);

  return (
    <div>
      {posts.map((p) => (
        <section key={p.id} className="EditPage">
          <PostCard
            key={p.id}
            post={p}
            userId={p.id}
            setCurrentPost={setCurrentPost}
            setShowPopUp={setShowPopUp}
          />
        </section>
      ))}
      <Modal isVisible={currentPost} onCancelPress={() => setCurrentPost(null)} >
        <EditForm
          post = {currentPost}
          onSubmitSuccess ={() => setCurrentPost(null)}
        />
      </Modal>
    </div>
  );
};

export default EditPage;
