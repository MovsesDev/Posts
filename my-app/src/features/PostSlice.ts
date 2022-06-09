import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts, deletePost, addPost, editPost, login } from "../api/api";

interface IInitialState {
  posts: {
    name: string;
    description: string;
    image: string;
    id: string;
    author: string
  }[];
  isAuth: boolean;
  userId: string
}

export const fetchPostsTC = createAsyncThunk("posts/fetchPosts", () => {
  return getPosts();
});

export const deletePostTC = createAsyncThunk(
  "posts/deletePost",
  async (id: string, { dispatch }) => {
    const data = await deletePost(id);
    dispatch(fetchPostsTC());
    return data;
  }
);

export const addNewPostTC = createAsyncThunk(
  "posts/addNewPost",
  async (
    post: { id: number; name: string ; description: string, author: string},
    { dispatch }
  ) => {
    const data = await addPost(post);
    dispatch(fetchPostsTC());
    return data;
  }
);

export const editPostTC = createAsyncThunk(
  "posts/editPostTC",
  async (
    post: { id: string; name: string; description: string },
    { dispatch }
  ) => {
    const data = await editPost(post);
    dispatch(fetchPostsTC());
    return data;
  }
);

export const loginTC = createAsyncThunk(
  "posts/loginTC",
  async (user: { email: string; password: string }, { dispatch }) => {
    const res = await login(user.email, user.password);
    if(res !== undefined) {
      dispatch(setIsAuth(true));
      dispatch(setUserId(res.id))
    }
    return res;
  }
);

const initialState: IInitialState = {
  posts: [],
  isAuth: false,
  userId: ''
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    removePostAC(state, action) {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setUserId(state, action) {
      state.isAuth = action.payload;
    },
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
      });
  },
});

export const { removePostAC, setIsAuth, setUserId } = postSlice.actions;

export default postSlice;
