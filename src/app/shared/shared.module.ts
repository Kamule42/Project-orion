import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateEqualDirective } from './validate-equal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValidateEqualDirective],
  exports : [ValidateEqualDirective]
})
export class SharedModule { }