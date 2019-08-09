import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateEqualDirective } from './directives/validate-equal.directive';
import { ValidatePasswordDirective } from './irectives/validate-password.directive';
import { ModalComponent } from './components/modal/modal.component';
import { UserServiceService } from './services/user-service.service';
import { SessionService } from './services/session.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValidateEqualDirective, ValidatePasswordDirective, ModalComponent],
  exports : [ValidateEqualDirective, ValidatePasswordDirective, ModalComponent],
  providers: [UserServiceService, SessionService]
})
export class SharedModule { }