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
  userId: string,
  isLoading: boolean
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
    const res = await addPost(post);
    dispatch(fetchPostsTC());
    console.log(res?.data);
    
    return res?.data;
  }
);

export const editPostTC = createAsyncThunk(
  "posts/editPostTC",
  async (
    post: { id: string | undefined; name: string | null; description: string | null },
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
      localStorage.setItem('user', JSON.stringify(user))
      dispatch(setIsAuth(localStorage.length !== 0 ? true : false))
      dispatch(setUserId(res.id))
    }
    return res;
  }
);

const initialState: IInitialState = {
  posts: [],
  isAuth: localStorage.length !== 0 ? true : false,
  userId: '',
  isLoading: false
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    removePostAC(state, action) {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setIsAuth(state,action) {
      state.isAuth = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsTC.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchPostsTC.rejected, (state, action) => {
        console.log("rejected");
      })
      .addCase(fetchPostsTC.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false
      });
  },
});

export const { removePostAC, setUserId, setIsAuth } = postSlice.actions;

export default postSlice;
