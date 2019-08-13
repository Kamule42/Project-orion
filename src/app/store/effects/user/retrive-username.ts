import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { catchError, mergeMap , map, tap } from 'rxjs/operators';

import { UserActions } from '../../actions/user.action';
import { UserService } from '../../../shared/services';

export function initSignWithEmail(actions$: Actions, userService:UserService){
  return createEffect(() => 
    actions$.pipe(
      ofType(UserActions.SIGNED_IN),
      map((action:any) => action.payload),
      mergeMap ((payload:any) => {
        return from(userService.getUser(payload.authenticatedUser.id));
      }),
      map(result => {{
        type: UserActions.SIGNED_IN,
        payload:result
      }})
    ));
}