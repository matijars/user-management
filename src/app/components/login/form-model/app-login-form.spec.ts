import { AppLoginForm } from './app-login-form';

describe('AppLoginForm', () => {
  let component: AppLoginForm;

  beforeEach(() => {
    component = new AppLoginForm();
  });

  it('should have all elements defined', () => {
    expect(component.controls['email']).toBeDefined();
    expect(component.controls['password']).toBeDefined();
  });

  it('should be invalid when no input values are defined', () => {
    component.controls['email'].setValue(null);
    component.controls['password'].setValue(null);

    expect(component.invalid).toBeTruthy();
  });

  it('should be valid when all input values are defined', () => {
    component.controls['email'].setValue('test@example.com');
    component.controls['password'].setValue('Test@1234');

    expect(component.valid).toBeTruthy();
  });

  it('should be valid when password strength is met', () => {
    component.controls['email'].setValue('test@example.com');
    component.controls['password'].setValue('Test@1234');

    expect(component.valid).toBeTruthy();
  });

  it('should be invalid when password strength is not met (all combinations for strength)', () => {
    component.controls['email'].setValue('test@example.com');

    component.controls['password'].setValue('WeakPassword123');

    expect(component.invalid).toBeTruthy();

    component.controls['password'].setValue('weakpassword@123');

    expect(component.invalid).toBeTruthy();

    component.controls['password'].setValue('WeakPassword@');

    expect(component.invalid).toBeTruthy();

    component.controls['password'].setValue('W@123');

    expect(component.invalid).toBeTruthy();
  });
});
