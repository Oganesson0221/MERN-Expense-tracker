// import { createSlice } from "@reduxjs/toolkit";

// //The create slice is going to automatically generate the reducers and actions
// //When we say a reducer in redux, reducers are functions that is going to take the initial state in our store

// //! Initial state
// //and here we are going to bring a complete main authentication project using react query and redux

// const authSlice = createSlice({
//   //The name here is going to be the action type. The action type determines the kind of action that you want to take
//   name: "auth",
//   initialState: {
//     user: JSON.parse(localStorage.getItem("userInfo")) || null,
//   },

//   // 1. Reducers
//   reducers: {
//     loginAction: (state, action) => {
//       //the first argument is the state which refers to the initialState provided above and the second argument refers to the
//       //The action is what the user wants to take. When a user logs in you are going to get what is called a response or feedback
//       //This is what we call a payload. So we have access to the response when you make a request on what is called action.payload
//       //so in this case react query is going to make a request to the backend. And from there we are going to get the response or the data

//       //So react query is going to give that data to redux for dispatching and we can access the data on a property called the action.payload
//       //so in here we are going to update our state by taking the state (and on that we have .user) and assign it to action.payload
//       state.user = action.payload;
//     },

//     //* Logout action
//     logoutAction: (state, action) => {
//       state.user = null;
//     },
//   },
// });

// //! Generate the actions
// //we can use authslice to generate actions and then the reducers
// export const { loginAction, logoutAction } = authSlice.actions;

// //! Generate the reducers
// const authReducer = authSlice.reducer;
// export default authReducer; //we are going to map this one in our redux store

import { createSlice } from "@reduxjs/toolkit";

//!Initial State
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
  },
  //1 Reducers
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    //Logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});
//! Generate actions
export const { loginAction, logoutAction } = authSlice.actions;
//! Generate the reducers
const authReducer = authSlice.reducer;
export default authReducer;
