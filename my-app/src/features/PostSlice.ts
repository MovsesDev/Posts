import { log } from 'console';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from '../api/api'
interface IInitialState {
    posts: {
        name: string,
    description: string,
    image: string,
    id: string
    }[]
    
}

 export const receivePosts = createAsyncThunk(
    'posts/getPosts',
    () => {
        return getPosts()
    }
)



const initialState : IInitialState = {
    posts: [] 
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        
    }, extraReducers: (builder) => {
        builder.addCase(receivePosts.pending, (state, action) => {
            console.log('pending');
            
        }).addCase(receivePosts.rejected, (state, action) => {
            console.log('rejected');
            
        }).addCase(receivePosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    }
})

export const {} = postSlice.actions

export default postSlice