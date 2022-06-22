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
import  PlusIcon from "../assets/img/plus-svgrepo-com.svg";



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
  const myPosts = [];
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

  const filteredPosts = posts.filter((p) => isAuth && p.author === userId);

  return (
    <React.Fragment>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="MyPostPage">
          {filteredPosts.length === 0 && (
            <div className="no__posts">No posts</div>
          )}
          <div className="post-add-btn">
            <span onClick={handleAddPost}>
              Add post <img src={PlusIcon} alt="" />
            </span>
          </div>
          <div className="posts">
            {posts.map(
              (p) =>
                isAuth &&
                p.author === userId && (
                  <PostCard
                    setCurrentPost={setCurrentPost}
                    userId={p.id}
                    post={p}
                    setIsEditPostVisible={setIsEditPostVisible}
                  />
                )
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
