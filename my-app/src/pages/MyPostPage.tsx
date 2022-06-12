import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditForm from "../common/EditForm";
import Modal from "../common/Modal";
import PostCard, { Post } from "../components/PostCard/PostCard";
import { useAppDispatch, useAppSelector } from "../hooks";
import AddPostForm from "./AddPostForm";
import "./MyPostPage.scss";

const MyPostPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [isAddPostVisible, setIsAddPostVisible] = useState<boolean>(false);
  const [isEditPostVisible, setIsEditPostVisible] = useState<boolean>(false);
  const isAuth = useAppSelector((state) => state.posts.isAuth);
  const posts = useAppSelector((state) => state.posts.posts);
  const userId = useAppSelector((state) => state.posts.userId);
  const navigate = useNavigate()

useEffect(() => {
  if(!isAuth) {
    navigate('/login')
  }
}, [])

  const handleAddPost = () => {
    setIsPopupVisible(true)
    setIsAddPostVisible(true)
    setIsEditPostVisible(false)
  }
  return (
    <div className="MyPostPage">
      <div className="post-add-btn">
        <span>Add post</span>
        <button onClick={handleAddPost}>+</button>
      </div>
      <div className="posts">
        {posts.map((p) =>
          isAuth && p.author === userId ? (
            <PostCard setCurrentPost={setCurrentPost} userId={p.id} post={p} setIsPopupVisible={setIsPopupVisible} setIsAddPostVisible={setIsAddPostVisible} setIsEditPostVisible={setIsEditPostVisible}/>
          ) : (
            ""
          )
        )}
      </div>
      <Modal isPopupVisible={isPopupVisible} onCancelPress={setIsPopupVisible} setIsAddPostVisible={setIsAddPostVisible}>
        <EditForm post={currentPost} onSubmitSuccess={setIsPopupVisible} isEditPostVisible={isEditPostVisible}/>
        <AddPostForm isAddPostVisible={isAddPostVisible} setIsPopupVisible={setIsPopupVisible}/>
      </Modal>
    </div>
  );
};

export default MyPostPage;
