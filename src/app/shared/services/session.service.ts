import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';

@Injectable()
export class SessionService {

  constructor(private afAuth:AngularFireAuth) {}

  public getCurrentUser(): User{
    let user = this.afAuth.auth.currentUser;
    if(user === null || user === undefined){
      return null;
    }
    return user;
  }

}