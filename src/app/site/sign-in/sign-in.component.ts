import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public data = {
    email:"",
    password:""
  }

  public error = null;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  signin(){
    this.afAuth.auth.signInWithEmailAndPassword(
      this.data.email, this.data.password).then(() => {
      this.router.navigate(['/']);
    })
    .catch(error => {
      //TODO : display error
      console.error(error);
      this.error = error;
    });
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}