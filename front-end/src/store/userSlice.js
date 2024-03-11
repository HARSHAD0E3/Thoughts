import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    fetchCurrentUser: (state, action) => {
      return (state = action.payload);
    },
    addRemoveFriend: (state, action) => {
      state.followings = action.payload;
      return state;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
