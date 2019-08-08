import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
 
import { UserActions } from '../actions/user.action';

@Injectable()
export class UserEffects {
 
  signInWithEmail$;
 
  constructor(
    private actions$: Actions,
    public afAuth: AngularFireAuth,
  ) {
    this.init();
  }

  private init(){
    this.initSignWithEmail();
  }

  private initSignWithEmail(){
    this.signInWithEmail$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UserActions.SIGNIN_WITH_EMAIL),
      switchMap((action:any) => from (this.afAuth.auth.signInWithEmailAndPassword(
         action.payload.email, action.payload.password))
         .pipe(
            map(result => ({
                type: UserActions.SIGNED_IN,
                payload:result
            }),
            catchError((error)=> of({
              type: UserActions.SIGNED_ERROR,
              payload: null
            }))
           )
        ),
      )
    ));
  }
}