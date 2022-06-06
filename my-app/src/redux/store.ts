import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../features/PostSlice";

const store = configureStore({
    reducer: {
        posts: PostSlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch