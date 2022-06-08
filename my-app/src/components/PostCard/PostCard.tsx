import React from "react";
import { deletePostTC } from "../../features/PostSlice";
import { useAppDispatch } from "../../hooks";
import "./PostCard.scss";
interface PostCardProps {
  name: string;
  description: string;
  image: string;
  id: string,
  setEditing: (id: string) => void | undefined, 
  setShowPopUp: (bool: boolean) => void | undefined,
}

const PostCard: React.FC<PostCardProps> = ({ name, description, image, id, setEditing, setShowPopUp }) => {
  const dispatch = useAppDispatch()

    const handleEdit = (id: string) => {
    setEditing(id);
    setShowPopUp(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deletePostTC(id));
  };

  return (
    <div className="PostCard">
      <div className="image">
        <img src={image} />
      </div>
      <div className="post-name">{name}</div>
      <div className="post-desc">{description}</div>
      <div className="buttons">
        <button onClick={() => handleEdit(id)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default PostCard;
