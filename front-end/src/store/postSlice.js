import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    fetchInitialPosts: (state, action) => {
      return (state = action.payload.posts);
    },
    // createPost: (state, action) => {
    //   return state;
    // },
    // deletePost: (state, action) => {
    //   return state;
    // },
  },
});

export const postsActions = postSlice.actions;
export default postSlice;
