import { createAction } from '@reduxjs/toolkit';
//Register
const registerRequest = createAction('@auth/registerRequest');
const registerSuccess = createAction('@auth/registerSuccess');
const registerError = createAction('@auth/registerError');
//Log-in
const loginRequest = createAction('@auth/loginRequest');
const loginSuccess = createAction('@auth/loginSuccess');
const loginError = createAction('@auth/loginError');
//Log-out
const logoutRequest = createAction('@auth/logoutRequest');
const logoutSuccess = createAction('@auth/logoutSuccess');
const logoutError = createAction('@auth/logoutError');
//Get
const getCurrentUserRequest = createAction('@auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('@auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('@auth/getCurrentUserError');

export default {
  //Register
  registerRequest,
  registerSuccess,
  registerError,
  //Log-in
  loginRequest,
  loginSuccess,
  loginError,
  //Log-out
  logoutRequest,
  logoutSuccess,
  logoutError,
  //Get
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
