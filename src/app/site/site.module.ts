import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';

import { SiteRoutingModule } from './site-routing.module';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, FontAwesomeModule,
    SiteRoutingModule, SharedModule
  ],
  declarations: [HomeComponent, SignInComponent, SignUpComponent, MainComponent, MenuComponent]
})
export class SiteModule { }