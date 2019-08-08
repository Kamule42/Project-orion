import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import {  signinWithEmail } from '../../store/actions/user.action';
import {  UserState } from '../../store/reducers/user.reducer';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public data:{email:string, password:string} = {
    email:"",
    password:""
  }
  private logged$: Observable<boolean>;
  private error$: Observable<string>;

  public error = null;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private store: Store<{ user: UserState }>) { }

  ngOnInit() {
    this.logged$ = this.store.pipe(
      select('user'),
      map(stateUser => stateUser != null && stateUser.authenticatedUser != null))
    this.error$ = this.store.pipe(
      select('user'),
      tap(state => console.log(state)),
      map(stateUser => (stateUser != null && stateUser.error != null) ? stateUser.error.error : null))
  }

  signin(){
    this.store.dispatch(signinWithEmail({
      payload:{
      email: this.data.email,
      password: this.data.password}
    }));
    /*this.afAuth.auth.signInWithEmailAndPassword(
      this.data.email, this.data.password).then(() => {
      this.router.navigate(['/']);
    })
    .catch(error => {
      //TODO : display error
      console.error(error);
      this.error = error;
    });*/
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}