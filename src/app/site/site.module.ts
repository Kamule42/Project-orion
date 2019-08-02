import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { SiteRoutingModule } from './site-routing.module';

@NgModule({
  imports: [
    CommonModule, SiteRoutingModule
  ],
  declarations: [HomeComponent]
})
export class SiteModule { }