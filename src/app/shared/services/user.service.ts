import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SessionService } from './session.service';
import { User } from '../models/user.interface';

@Injectable()
export class UserService {

  constructor(
    private afs: AngularFirestore,
    private session: SessionService) {}


  getUser(){
    let user = this.session.getCurrentUser();
    if(user === null){
      return null;
    }
    return this.afs.collection<User>('Users').ref.doc(user.uid);
  }
}