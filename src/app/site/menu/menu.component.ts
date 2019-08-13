import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

import { UserState } from '../../store/reducers/user.reducer';
import { User } from '../../shared/models/user.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuDisplayed:boolean = false;
  authUser$:Observable<User>;

  constructor(
    private store: Store<{ user: UserState }>) { }

  ngOnInit() {
    this.authUser$ = this.store.pipe(
      select('user'),
      filter(stateUser => stateUser != null && stateUser.authenticatedUser != null),
      map((payload:any) => payload.authenticatedUser),
      tap(user => console.log(user))
    );
  }

}