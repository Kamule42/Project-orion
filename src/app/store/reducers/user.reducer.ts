import { createReducer, on } from '@ngrx/store';

import { User } from "../../shared/models/user.interface";

import { signupWithEmail, signinWithEmail, signWithProvider,
 signout, defineUsername, signedIn, signError } from "../actions/user.action";

export interface UserState{
  loading:boolean;
  authenticatedUser: User;
  error:string;
}

export const initialState:UserState = {
  loading: false,
  authenticatedUser : null,
  error: null
};

export const userReducer = createReducer(initialState,
  on(signupWithEmail, state => ({
    loading: true,
    authenticatedUser : null
  })),
  on(signinWithEmail, state => ({
    loading: true,
    authenticatedUser : null
  })),
  on(signWithProvider, state => ({
    loading: true,
    authenticatedUser: null
  })),
  on(signedIn, (state, {payload} ) => {
    console.log(state, payload);
    return {
    loading: false,
    authenticatedUser : payload.user
  }}),
  on(signout, state => ({
    loading:false,
    authenticatedUser: null
  })),
  on(defineUsername, (state, {payload}) => {
    state.authenticatedUser.username = payload.username;
    return {
      loading:false,
      authenticatedUser: state.authenticatedUser
    }
  }),
  on(signError, (state, {payload}) => {
    console.log(state, payload)
    return {
      loading:false,
      authenticatedUser: null,
      error: payload.error
    }
  }),
);
