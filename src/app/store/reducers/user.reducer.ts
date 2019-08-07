import { createReducer, on } from '@ngrx/store';

import { User } from "../models/user.interface";

import { signupWithEmail, signinWithEmail, signWithProvider,
 signout, defineUsername, signedIn } from "../actions/user.action";

export interface UserState{
  loading:boolean;
  authenticatedUser: User;
}

export const initialState:UserState = {
  loading: false,
  authenticatedUser : null
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
  on(signedIn, (state, {user} ) => ({
    loading: false,
    authenticatedUser : user
  })),
  on(signout, state => ({
    loading:false,
    authenticatedUser: null
  })),
  on(defineUsername, (state, {username}) => {
    state.authenticatedUser.username = username;
    return {
      loading:false,
      authenticatedUser: state.authenticatedUser
    }
  }),
);
