import React, {
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Post } from "../components/PostCard/PostCard";
import { editPostTC } from "../features/PostSlice";
import { useAppDispatch } from "../hooks";
import "./EditForm.scss";

interface EditFormProps {
  post: Post | null;
  onSubmitSuccess: Dispatch<SetStateAction<Post | null>>
}

const EditForm: React.FC<EditFormProps> = ({ post, onSubmitSuccess }) => {
  const [user, setUser] = useState<string>(post?.name || '');
  const [description, setDescription] = useState<string>(post?.description || '');
  console.log(post);
  const dispatch = useAppDispatch();

  const handleEditSubmit = (id: string | undefined) => {
    const editedPost = {
      id,
      name: user,
      description,
    };
    dispatch(editPostTC(editedPost));
    onSubmitSuccess(null);
    
    
  };

  return (
    <div className="editForm">
      <form className="form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <div className="buttons">
          <button onClick={() => handleEditSubmit(post?.id)}>Submit</button>
          <button onClick={() => onSubmitSuccess(null)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
