import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state , action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user._id!== action.payload);
    },
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      state.users = state.users.map((user) =>
        user._id === updatedUser._id? updatedUser : user
      );
    },
  }
});

const userReducer = usersSlice.reducer;
const userAction = usersSlice.actions;

export {userReducer, userAction};
