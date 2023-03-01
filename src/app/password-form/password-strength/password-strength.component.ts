import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent  {
  @Input() password: any;

  if () {}
  calcPassStrength(): number {
    let currentPass = this.password || '';
    let password_strength = 0;

    const RegExpController = {
      latters: /\p{Letter}.{7,}$/,
      digits: /^(?=.*[0-9]).{7,}$/,
      symbols: /^(?=.*[!@#\$%\^&\*]).{7,}$/,
    }

    if (currentPass.length === 0) {
      return 0;
    }

    if (currentPass.length < 8 && currentPass.length > 0) {
      return 1;
    }

    let RegExpCheck: keyof typeof RegExpController;

    for (RegExpCheck in RegExpController) {
      if (RegExpController[RegExpCheck]) {
        const strength_check = new RegExp(RegExpController[RegExpCheck], 'ui').test(currentPass);
        if (strength_check) {
          console.log('Regex valid', RegExpController[RegExpCheck]);
          password_strength++;
        }
      }
    }

    return password_strength;
  }
}

