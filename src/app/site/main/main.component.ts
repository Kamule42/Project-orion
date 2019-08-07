import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {  UserState } from '../../store/reducers/user.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user$: Observable<UserState>;

  constructor(private store: Store<{ user: UserState }>) {
    this.user$ = store.pipe(select('user'));
  }

  ngOnInit() {
  }

}