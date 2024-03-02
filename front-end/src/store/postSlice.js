import { createSlice } from "@reduxjs/toolkit";
import {} from "react-redux";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    fetchInitialPosts: (state, action) => {
      return (state = action.payload.posts);
    },
  },
});

export const postsActions = postSlice.actions;
export default postSlice;
