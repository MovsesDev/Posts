import React, { useEffect } from "react";
import ModalForm from "../common/EditForm";
import PostCard from "../components/PostCard/PostCard";
import { fetchPostsTC } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./HomePage.scss";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
const HomePage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);

  const override = css`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  `;

  useEffect(() => {
    dispatch(fetchPostsTC());
  }, []);

  return (
    <div className="HomePage">
      {isLoading ? (
        <ClipLoader color="red" css={override}/>
      ) : (
        posts.map((p) => <PostCard post={p} />)
      )}
    </div>
  );
};

export default HomePage;
