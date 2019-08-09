import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { userReducer } from './store';
import { UserEffects } from './store/effects/user.effects';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FontAwesomeModule,
    AppRoutingModule, SharedModule,
    StoreModule.forRoot({ user: userReducer }),
    EffectsModule.forRoot([UserEffects]),
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
