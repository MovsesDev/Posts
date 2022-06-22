import React, { useEffect, useRef } from "react";
import PostCard from "../components/PostCard/PostCard";
import { fetchPostsTC } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./HomePage.scss"; 
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
          {isLoading && <Preloader/>}
      { posts.length === 0 && <div className="no__posts">No posts</div> }
        <div className="posts">
          {posts.map((p) => (
            <PostCard post={p} />
            ))}
        </div>
      
    </div>
    
  );
};

export default HomePage;
