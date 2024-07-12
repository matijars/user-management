import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AppLoginForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        passwordStrengthValidator(8, 3),
      ]),
    });
  }
}

function passwordStrengthValidator(
  charLength: number = 8,
  strength: number = 3
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const hasNumber = /\d/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const isValidLength = value.length >= charLength;

    const score = [hasNumber, hasSpecial, hasUpper, isValidLength].filter(
      Boolean
    ).length;

    if (score >= strength) {
      return null;
    } else {
      return { passwordStrength: true };
    }
  };
}
