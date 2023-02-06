import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {


    const RegExpController = {
      latters: /\p{Letter}.{7,}$/,
      digits: /^(?=.*[0-9]).{7,}$/,
      symbols: /^(?=.*[!@#\$%\^&\*]).{7,}$/,
    }

    let password_strength = 0;
    let RegExpCheck: keyof typeof RegExpController;

    for (RegExpCheck in RegExpController) {
      if (RegExpController[RegExpCheck]) {
        const strength_check = new RegExp(RegExpController[RegExpCheck], 'ui').test(control.value);
        if (strength_check) {
          password_strength++;
        }
      }
    }

    return {passwordStrength: {value: password_strength}};
  };
}

@Directive({
  selector: '[appPasswordStrength]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}]
})

export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return passwordStrengthValidator()(control)
  }
}
