import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth) {}

  public data = {
    email:"",
    emailConfirmation:"",
    password:"",
    passwordConfirmation:""
  }

  ngOnInit() {
  }

  signup(){
    this.afAuth.auth.createUserWithEmailAndPassword(
      this.data.email, this.data.password)
    .then(() => {
      this.router.navigate(['/']);
    });
  }

}