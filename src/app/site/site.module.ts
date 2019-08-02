import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SiteRoutingModule } from './site-routing.module';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, FontAwesomeModule,
    SiteRoutingModule
  ],
  declarations: [HomeComponent, SignInComponent, SignUpComponent]
})
export class SiteModule { }