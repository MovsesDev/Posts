import React, { SetStateAction } from "react";
import { deletePostTC } from "../../features/PostSlice";
import { useAppDispatch } from "../../hooks";
import "./PostCard.scss";

export type Post = {
  name: string;
  description: string;
  image: string;
  id: string;
  author: string;
};

interface PostCardProps {
  post: Post;
  userId?: string;
  setCurrentPost?: (post: Post) => void | undefined;
  setIsPopupVisible?: React.Dispatch<SetStateAction<boolean>>;
  setIsEditPostVisible?: React.Dispatch<SetStateAction<boolean>>;
  setIsAddPostVisible?: React.Dispatch<SetStateAction<boolean>>;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  userId,
  setCurrentPost,
  setIsEditPostVisible,
  setIsPopupVisible,
  setIsAddPostVisible
}) => {
  const dispatch = useAppDispatch();

  const handleEdit = (post: Post) => {
    if ( setCurrentPost && setIsPopupVisible && setIsEditPostVisible && setIsAddPostVisible) {
      setCurrentPost(post);
      setIsPopupVisible(true)
      setIsEditPostVisible(true)
      setIsAddPostVisible(false)
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deletePostTC(id));
  };

  return (
    <div className="PostCard">
      <div className="image">
        <img src={post.image} />
      </div>
        <div className="post-name">{post.name}</div>
        <div className="post-desc">{post.description}</div>
      
      {userId && (
        <div className="buttons">
          <button onClick={() => handleEdit(post)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default PostCard;
