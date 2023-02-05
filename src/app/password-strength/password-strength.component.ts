import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../shared/password-strength.directive';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnInit {
  password_val = ''

  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      password: new FormControl(this.password_val, [
        Validators.minLength(8),
        passwordStrengthValidator(),
      ])
    });
  }

  get password() { return this.heroForm.get('password')!; }

}
