import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable  } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
 
import { UserActions } from '../actions/user.action';

@Injectable()
export class UserEffects {
 
  signInWithEmail$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UserActions.SIGNIN_WITH_EMAIL),
      map(action => {
        console.log("login : ", action)
        return Observable.fromPromise (this.afAuth.auth.signInWithEmailAndPassword(
         action.email, action.password))
        }
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    public afAuth: AngularFireAuth,
  ) {}
}