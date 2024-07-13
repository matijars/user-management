import { AbstractControl } from '@angular/forms';

export function passwordStrengthValidator(
  charLength: number = 8,
  strength: number = 3
) {
  return (control: AbstractControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasNumber = /\d/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const meetsLength = value.length >= charLength;

    const requirementsMet = [
      hasNumber,
      hasUpperCase,
      hasSpecialCharacter,
      meetsLength,
    ].filter(Boolean).length;

    return requirementsMet >= strength ? null : { passwordStrength: true };
  };
}
