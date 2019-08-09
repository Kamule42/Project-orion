import { Injectable } from '@angular/core';
import { Actions, Effect} from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';

import {initSignWithEmail} from './user/init-sign-with-email'

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
    this.signInWithEmail$ = initSignWithEmail(this.actions$, this.afAuth);
  }
}