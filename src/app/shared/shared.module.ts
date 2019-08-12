import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateEqualDirective } from './directives/validate-equal.directive';
import { ValidatePasswordDirective } from './directives/validate-password.directive';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValidateEqualDirective, ValidatePasswordDirective, ModalComponent],
  exports : [ValidateEqualDirective, ValidatePasswordDirective, ModalComponent]
})
export class SharedModule { }