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
  on(signedIn, (state, {payload} ) => ({
    loading: false,
    authenticatedUser : payload.user
  })),
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
);
