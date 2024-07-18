import { AbstractControl } from '@angular/forms';
import { AppUserForm } from './app-user-form';

describe('AppUserForm', () => {
  let userForm: AppUserForm;

  let usernameControl: AbstractControl;
  let emailControl: AbstractControl;
  let typeControl: AbstractControl;
  let pibControl: AbstractControl;
  let mbrControl: AbstractControl;

  beforeEach(() => {
    userForm = new AppUserForm();

    usernameControl = userForm.controls['username'];
    emailControl = userForm.controls['email'];
    typeControl = userForm.controls['type'];
    pibControl = userForm.controls['pib'];
    mbrControl = userForm.controls['type'];
  });

  it('should have all elements defined', () => {
    expect(usernameControl).toBeDefined();
    expect(emailControl).toBeDefined();
    expect(typeControl).toBeDefined();
    expect(pibControl).toBeDefined();
    expect(mbrControl).toBeDefined();
  });

  it('should be invalid when no input values are defined', () => {
    usernameControl.setValue(null);
    emailControl.setValue(null);
    typeControl.setValue(null);
    pibControl.setValue(null);
    mbrControl.setValue(null);

    expect(userForm.invalid).toBeTruthy();
  });

  it('should be valid when all input values are defined', () => {
    userForm.controls['username'].setValue('testuser');
    userForm.controls['email'].setValue('test@example.com');
    userForm.controls['type'].setValue('individual');

    expect(userForm.valid).toBe(true);

    userForm.controls['type'].setValue('company');
    userForm.controls['pib'].setValue('123456789');
    userForm.controls['mbr'].setValue('987654321');

    expect(userForm.valid).toBe(true);
  });
});
