import React, { useEffect, useState } from "react";
import ModalFrom from "../common/ModalFrom";
import PostCard from "../components/PostCard/PostCard";
import { deletePostTC, fetchPostsTC } from "../features/PostSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./EditPage.scss";

const EditPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const [editing, setEditing] = useState<string | undefined>();
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsTC());
  }, []);


  return (
    <div>

      {posts.map(p =>  editing == p.id ? ( <section>
          <ModalFrom
            setEditing={setEditing}
            id={editing}
            name={p.name}
            desc={p.description}
          />
        </section>) : (
           <section key={p.id} className="EditPage">
           <PostCard
             key={p.id}
             name={p.name}
             description={p.description}
             image={p.image}
             id={p.id}
             setEditing={setEditing}
             setShowPopUp={setShowPopUp}
           />
         </section>
        )
      )}
    </div>
  );
};

export default EditPage;
