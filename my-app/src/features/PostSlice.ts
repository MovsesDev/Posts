import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts, deletePost, addPost, editPost } from "../api/api";

interface IInitialState {
  posts: {
    name: string;
    description: string;
    image: string;
    id: string;
  }[];
}

export const fetchPostsTC = createAsyncThunk("posts/fetchPosts", () => {
  return getPosts();
});

export const deletePostTC = createAsyncThunk(
  "posts/deletePost",
  async (id: string, { dispatch }) => {
    
    dispatch(removePostAC(id));
    return deletePost(id);
  }
);

export const addNewPostTC = createAsyncThunk(
  "posts/addNewPost",
  async (post: { id: number; name: string | null ; description: string | null}, { dispatch }) => {
    const data = await addPost(post);
    dispatch(fetchPostsTC())
   return data;
  }
);

export const editPostTC = createAsyncThunk(
  "posts/editPostTC",
  async (post: { id: string; name: string; description: string }, { dispatch }) => {
    // dispatch(editPostAC({name: post.name, description: post.description}))
    const data = await editPost(post)
    dispatch(fetchPostsTC())
    return data
  }
);

const initialState: IInitialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // addPostAC(state, action) {
    //   state.posts.push(action.payload);
    // },
    removePostAC(state, action) {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
    // editPostAC(state, action) {
    //   state.posts.map(p => {
    //     if (p.description !== action.payload.description) {
    //       p.description = action.payload.description
    //     }
    //     if (p.name !== action.payload.name) {
    //       p.name = action.payload.name
    //     }
    //   })
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsTC.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(fetchPostsTC.rejected, (state, action) => {
        console.log("rejected");
      })
      .addCase(fetchPostsTC.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      // .addCase(addNewPostTC.fulfilled, (state, action) => {
      //   state.posts = action.payload;
      // });
  },
});

export const { removePostAC } = postSlice.actions;

export default postSlice;
