import React, { useEffect, useRef } from "react";
import PostCard from "../components/PostCard/PostCard";
import { fetchPostsTC } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./HomePage.scss";
import Preloader from "../hoc/Preloader";
const HomePage = () => {

  // const onWheel = e => {
  //   e.preventDefault();
  //   const container = scrollRef.current;
  //   const containerScrollPosition = scrollRef.current.scrollLeft;

  //   container.scrollTo({
  //     top: 0,
  //     left: containerScrollPosition + e.deltaY,
  //   });
  // };

  // const scrollRef = useRef(null);

  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(fetchPostsTC());
  }, []);

  return (
    <div className="HomePage">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="posts">
          {posts.map((p) => (
            <PostCard post={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
