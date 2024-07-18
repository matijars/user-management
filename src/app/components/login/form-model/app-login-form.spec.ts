import { AppLoginForm } from './app-login-form';
import { AbstractControl } from '@angular/forms';

describe('AppLoginForm', () => {
  let component: AppLoginForm;

  let emailControl: AbstractControl;
  let passwordControl: AbstractControl;

  beforeEach(() => {
    component = new AppLoginForm();

    emailControl = component.controls['email'];
    passwordControl = component.controls['password'];
  });

  it('should have all elements defined', () => {
    expect(emailControl).toBeDefined();
    expect(passwordControl).toBeDefined();
  });

  it('should be invalid when no input values are defined', () => {
    emailControl.setValue(null);
    passwordControl.setValue(null);

    expect(component.invalid).toBeTruthy();
  });

  it('should be valid when all input values are defined', () => {
    emailControl.setValue('test@example.com');
    passwordControl.setValue('Test@1234');

    expect(component.valid).toBeTruthy();
  });

  it('should be valid when password strength is met', () => {
    emailControl.setValue('test@example.com');
    passwordControl.setValue('Test@1234');

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
});
