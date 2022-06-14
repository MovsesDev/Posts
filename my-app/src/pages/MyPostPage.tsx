import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditForm from "../common/EditForm";
import Modal from "../common/Modal";
import PostCard, { Post } from "../components/PostCard/PostCard";
import { useAppDispatch, useAppSelector } from "../hooks";
import AddPostForm from "./AddPostForm";
import "./MyPostPage.scss";
import Preloader from "../hoc/Preloader";
import { fetchPostsTC } from "../features/PostSlice";

const MyPostPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [isAddPostVisible, setIsAddPostVisible] = useState<boolean>(false);
  const [isEditPostVisible, setIsEditPostVisible] = useState<boolean>(false);
  const isAuth = useAppSelector((state) => state.posts.isAuth);
  const posts = useAppSelector((state) => state.posts.posts);
  const userId = useAppSelector((state) => state.posts.userId);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    dispatch(fetchPostsTC());
  }, []);


  const handleAddPost = () => {
    setIsAddPostVisible(true);
  };
  return (
    <React.Fragment>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="MyPostPage">
          <div className="post-add-btn">
            <span onClick={handleAddPost}>Add post <button>+</button></span>
            
          </div>
          <div className="posts">
            {posts.map((p) =>
              isAuth && p.author === userId ? (
                <PostCard
                  setCurrentPost={setCurrentPost}
                  userId={p.id}
                  post={p}
                  setIsEditPostVisible={setIsEditPostVisible}
                />
              ) : null
            )}
          </div>
          <Modal
            isPopupVisible={isAddPostVisible}
            setIsPopupVisible={setIsAddPostVisible}
          >
            <AddPostForm onSubmitSuccess={() => setIsAddPostVisible(false)} />
          </Modal>

          <Modal
            isPopupVisible={isEditPostVisible}
            setIsPopupVisible={setIsEditPostVisible}
          >
            <EditForm
              post={currentPost}
              onSubmitSuccess={() => setIsEditPostVisible(false)}
            />
          </Modal>
        </div>
      )}
    </React.Fragment>
  );
};

export default MyPostPage;
