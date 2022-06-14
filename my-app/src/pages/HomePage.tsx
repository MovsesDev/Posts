import React, { useEffect } from "react";
import ModalForm from "../common/EditForm";
import PostCard from "../components/PostCard/PostCard";
import { fetchPostsTC } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./HomePage.scss";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Preloader from "../hoc/Preloader";
const HomePage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);


  useEffect(() => {
    dispatch(fetchPostsTC());
  }, []);

  return (
    <div className="HomePage">
      {isLoading ? (
        <Preloader/>
      ) : (
        posts.map((p) => <PostCard post={p} />)
      )}
    </div>
  );
};

export default HomePage;
