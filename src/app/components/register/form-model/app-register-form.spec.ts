import { AppRegisterForm } from './app-register-form';
import { AbstractControl } from '@angular/forms';

describe('AppRegisterForm', () => {
  let component: AppRegisterForm;

  let emailControl: AbstractControl;
  let passwordControl: AbstractControl;
  let confirmPasswordControl: AbstractControl;

  beforeEach(() => {
    component = new AppRegisterForm();

    emailControl = component.controls['email'];
    passwordControl = component.controls['password'];
    confirmPasswordControl = component.controls['confirmPassword'];
  });

  it('should have all elements defined', () => {
    expect(emailControl).toBeDefined();
    expect(passwordControl).toBeDefined();
    expect(confirmPasswordControl).toBeDefined();
  });

  it('should be invalid when no input values are defined', () => {
    emailControl.setValue(null);
    passwordControl.setValue(null);
    confirmPasswordControl.setValue(null);

    expect(component.invalid).toBeTruthy();
  });

  it('should be valid when all input values are defined', () => {
    emailControl.setValue('test@example.com');
    passwordControl.setValue('Test@1234');
    confirmPasswordControl.setValue('Test@1234');

    expect(component.valid).toBeTruthy();
  });

  it('should be valid when password strength is met', () => {
    emailControl.setValue('test@example.com');
    passwordControl.setValue('Test@1234');
    confirmPasswordControl.setValue('Test@1234');

    expect(component.valid).toBeTruthy();
  });

  it('should be invalid when password strength is not met (all combinations for strength)', () => {
    emailControl.setValue('test@example.com');

    passwordControl.setValue('WeakPassword123');

    expect(component.invalid).toBeTruthy();

    passwordControl.setValue('weakpassword@123');

    expect(component.invalid).toBeTruthy();

    passwordControl.setValue('WeakPassword@');

    expect(component.invalid).toBeTruthy();

    passwordControl.setValue('W@123');

    expect(component.invalid).toBeTruthy();
  });

  it('should invalid if passwords do not match', () => {
    passwordControl.setValue('ValidPassword1!');
    confirmPasswordControl.setValue('InvalidPassword');

    expect(component.valid).toBeFalse();
    expect(component.errors).toEqual({ passwordMismatch: true });
  });
});
