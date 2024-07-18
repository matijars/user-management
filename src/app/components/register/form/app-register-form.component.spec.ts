import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegisterFormComponent } from './app-register-form.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

describe('AppRegisterFormComponent', () => {
  let component: AppRegisterFormComponent;
  let fixture: ComponentFixture<AppRegisterFormComponent>;

  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let confirmPasswordInput: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppRegisterFormComponent,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    emailInput = fixture.nativeElement.querySelector('#email');
    passwordInput = fixture.nativeElement.querySelector('#password');
    confirmPasswordInput =
      fixture.nativeElement.querySelector('#confirmPassword');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all elements defined', () => {
    const heading = fixture.debugElement.query(By.css('h2'));
    const emailLabel = fixture.debugElement.query(By.css('label[for=email]'));

    const passwordLabel = fixture.debugElement.query(
      By.css('label[for=password]')
    );

    const registerButton = fixture.debugElement.query(
      By.css('button[type=submit]')
    );

    // Toggle password visibility - start
    expect(passwordInput.type).toBe('password');

    const toggleButton = fixture.debugElement.query(
      By.css('button[type=button]')
    );
    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(passwordInput.type).toBe('text');

    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(passwordInput.type).toBe('password');
    // Toggle password visibility - end

    expect(heading).toBeTruthy();
    expect(emailLabel).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordLabel).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(registerButton).toBeTruthy();
  });

  it('should show no errors when pristine and invalid on first open', () => {
    expect(component.registerForm.valid).toBe(false);

    const emailError = fixture.debugElement.query(By.css('.email-error'));
    expect(emailError).toBeNull();

    const passwordError = fixture.debugElement.query(By.css('.password-error'));
    expect(passwordError).toBeNull();

    const confirmPasswordError = fixture.debugElement.query(
      By.css('.confirm-password-error')
    );
    expect(confirmPasswordError).toBeNull();
  });

  it('should show errors when fields are touched and invalid', () => {
    emailInput.value = '';
    emailInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    let emailError = fixture.debugElement.query(By.css('.email-error'));
    expect(emailError).toBeTruthy();

    passwordInput.value = 'password123';
    passwordInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    let passwordError = fixture.debugElement.query(By.css('.password-error'));
    expect(passwordError).toBeTruthy();

    confirmPasswordInput.value = 'differentPassword';
    confirmPasswordInput.dispatchEvent(new Event('input'));
    confirmPasswordInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    let confirmPasswordError = fixture.debugElement.query(
      By.css('.confirm-password-error')
    );
    expect(confirmPasswordError).toBeTruthy();
  });

  it('should show no errors when all fields are valid', () => {
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));

    passwordInput.value = 'Password1!';
    passwordInput.dispatchEvent(new Event('input'));

    confirmPasswordInput.value = 'Password1!';
    confirmPasswordInput.dispatchEvent(new Event('input'));

    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    const emailError = fixture.nativeElement.querySelector('.email-error');
    expect(emailError).toBeNull();

    const passwordError =
      fixture.nativeElement.querySelector('.password-error');
    expect(passwordError).toBeNull();

    const confirmPasswordError = fixture.nativeElement.querySelector(
      '.confirm-password-error'
    );
    expect(confirmPasswordError).toBeNull();
  });
});
