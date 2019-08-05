import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validatePassword][formControlName],[validatePassword][formControl],[validatePassword][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidatePasswordDirective, multi: true}]
})
export class ValidatePasswordDirective {

  validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        let v = c.value;
        // value not equal
        if (v) {
          let containsUpperCase = false;
          let containsLowerCase = false;
          let containerNumber = false;
          let containsSpecial = false;
          v.split('').forEach(c => {
            if(/^[a-zA-Z0-9- ,_]*$/.test(c) == false){
                containsSpecial = true;
            }
            else if (!isNaN(c * 1)){
              containerNumber = true;
            }
            else{
              if (c == c.toUpperCase()) {
                containsUpperCase = true;
              }
              if (c == c.toLowerCase()){
                containsLowerCase = true;
              }
            }
          });
          let ok = +containsUpperCase+(+containsLowerCase)+(+containerNumber)+(+containsSpecial) >= 3;
          if(!ok)  return {
            validatePassword: true
          }
        }
        return null;
    }


}