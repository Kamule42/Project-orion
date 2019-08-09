import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from '../../actions/user.action';
import { EMPTY, from, of } from 'rxjs';
import { catchError, mergeMap , map, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

export function initSignWithEmail(actions$: Actions, afAuth:AngularFireAuth){
  return createEffect(() => 
    actions$.pipe(
      ofType(UserActions.SIGNIN_WITH_EMAIL),
      map((action:any) => action.payload),
      mergeMap ((payload:any) => {
        return from(.afAuth.auth.signInWithEmailAndPassword(
         payload.email, payload.password));
      }),
      map(result => ({
        type: UserActions.SIGNED_IN,
        payload:result
      })),
      catchError((error)=> of({
        type: UserActions.SIGNED_ERROR,
        payload: {
          error : error.message
        }
      }))
    ));
}