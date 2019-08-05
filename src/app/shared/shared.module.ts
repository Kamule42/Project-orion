import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateEqualDirective } from './validate-equal.directive';
import { ValidatePasswordDirective } from './validate-password.directive';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValidateEqualDirective, ValidatePasswordDirective, ModalComponent],
  exports : [ValidateEqualDirective, ValidatePasswordDirective, ModalComponent]
})
export class SharedModule { }