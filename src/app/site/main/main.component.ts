import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {  UserState } from '../../store/reducers/user.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private store: Store<{ user: UserState }>) {
  }

  ngOnInit() {
    this.store.pipe(
      select('user'),
      map(payload => {
        
      })
    );
  }

}