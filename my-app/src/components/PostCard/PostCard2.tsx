import React from "react";
import { useAppDispatch } from "../../hooks";
import "./PostCard.scss";
interface PostCardProps {
  name: string;
  description: string;
  image: string;
}

const PostCard2: React.FC<PostCardProps> = ({ name, description, image, }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="PostCard">
      <div className="image">
        <img src={image} />
      </div>
      <div className="post-name">{name}</div>
      <div className="post-desc">{description}</div>
    </div>
  );
};

export default PostCard2;
