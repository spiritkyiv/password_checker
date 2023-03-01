import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { PasswordValidatorDirective } from './shared/password-strength.directive';

// import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PasswordInputComponent } from './password-form/password-input/password-input.component';
import { PasswordStrengthComponent } from './password-form/password-strength/password-strength.component';

@NgModule({
  declarations: [
    AppComponent,
    // PasswordStrengthComponent,
    // PasswordValidatorDirective,
    PasswordStrengthComponent,
    PasswordFormComponent,
    PasswordInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
