import { createReducer, on } from '@ngrx/store';

import { User } from "../../shared/models/user.interface";

import { signupWithEmail, signinWithEmail, signWithProvider,
 signout, retrieveUser, userRetrieved, signedIn, signError } from "../actions/user.action";

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
    ...state,
    loading: true,
    authenticatedUser : null
  })),
  on(signinWithEmail, state => ({
    ...state,
    loading: true,
    authenticatedUser : null
  })),
  on(signWithProvider, state => ({
    ...state,
    loading: true,
    authenticatedUser: null
  })),
  on(signedIn, (state, {payload} ) => ({
    ...state,
    loading: false,
    authenticatedUser : payload
  })),
  on(signout, state => ({
    ...state,
    loading:false,
    authenticatedUser: null
  })),
  on(retrieveUser, (state, {payload}) => ({
      ...state, loading:true
  })),
  on(userRetrieved, (state, {payload}) => ({
    ...state,
    loading: false,
    authenticatedUser:payload.user
  })),
  on(signError, (state, {payload}) => ({
    ...state,
    loading:false,
    authenticatedUser: null,
    error: payload.error
  })),
);
