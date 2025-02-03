import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isAuthticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggesIn: (state, action) => {
      state.user = action.payload.user;
      state.isAuthticated = true;
    },
    userLoggesOut: (state) => {
      state.user = null;
      state.isAuthticated = false;
    },
  },
});

export const {userLoggesIn, userLoggesOut} = authSlice.actions;
export default authSlice.reducer;
 