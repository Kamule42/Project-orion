import { createAction, props } from '@ngrx/store';
import { User } from "../../shared/models/user.interface";

export enum UserActions {
  SIGNUP_WITH_EMAIL   = '[User Component] Sign up (with email)',
  SIGNIN_WITH_EMAIL   = '[User Component] Sign in (with email)',
  SIGN_WITH_PROVIDER  = '[User Component] Sign with porvider',
  SIGNED_IN           = '[User Component] Sign in',
  SIGNE_OUT           = '[User Component] Sign out',
  RETRIEVE_USER       = '[User Component] retrieve user',
  USER_RETRIEVED      = '[User Component] user retrived',
  SIGNED_ERROR        = '[User Component] sign error',
}

export const signupWithEmail = createAction(
  UserActions.SIGNUP_WITH_EMAIL,
  props<{payload:{email: string; password: string}}>()
);

export const signinWithEmail = createAction(
  UserActions.SIGNIN_WITH_EMAIL,
  props<{payload:{email: string; password: string}}>()
);

export const signWithProvider = createAction(
  UserActions.SIGN_WITH_PROVIDER,
  props<{payload:{provider:string}}>()
);

export const signedIn = createAction(
  UserActions.SIGNED_IN,
  props<{payload:{user:User}}>()
);

export const signout = createAction(UserActions.SIGNE_OUT);

export const retrieveUser = createAction(
  UserActions.RETRIEVE_USER,
  props<{payload:{uid:string}}>());

export const userRetrieved = createAction(
  UserActions.USER_RETRIEVED,
  props<{payload:{user:User}}>());

export const signError = createAction(
  UserActions.SIGNED_ERROR,
  props<{payload:{error:string}}>());