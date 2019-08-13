import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SessionService } from './session.service';
import { User } from '../models/user.interface';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private afs: AngularFirestore,
    private session: SessionService) {}


  getUser(uid:string):Observable<User>{
    return from(this.afs.collection<User>('Users')
      .ref.doc(uid)
      .get())
      .pipe(
        map(doc => {
          if(doc.exists){
            return doc.data() as User;
          }
          return null;
        })
      );
  }
}