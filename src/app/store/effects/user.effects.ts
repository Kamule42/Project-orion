import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from  } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
 
import { UserActions } from '../actions/user.action';

@Injectable()
export class UserEffects {
 
  signInWithEmail$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UserActions.SIGNIN_WITH_EMAIL),
      switchMap(action => from (this.afAuth.auth.signInWithEmailAndPassword(
         action.email, action.password))
         .map(result => {
           type: UserActions.SIGNED_IN,
           payload:result
         ))
         .catchError((error)=> of({
           type: UserActions.SIGNED_ERROR
         }))
      ),
    )
  );
 
  constructor(
    private actions$: Actions,
    public afAuth: AngularFireAuth,
  ) {}
}