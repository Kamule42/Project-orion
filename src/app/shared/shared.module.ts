import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateEqualDirective } from './validate-equal.directive';
import { ValidatePasswordDirective } from './validate-password.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValidateEqualDirective, ValidatePasswordDirective],
  exports : [ValidateEqualDirective, ValidatePasswordDirective]
})
export class SharedModule { }