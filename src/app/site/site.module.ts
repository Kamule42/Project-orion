import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { SiteRoutingModule } from './site-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, SiteRoutingModule
  ],
  declarations: [HomeComponent, SignInComponent, SignUpComponent]
})
export class SiteModule { }