import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppLoginFormComponent } from './app-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AppLoginFormComponent', () => {
  let component: AppLoginFormComponent;
  let fixture: ComponentFixture<AppLoginFormComponent>;

  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CommonModule, RouterModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'test-id' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    emailInput = fixture.nativeElement.querySelector('#email');
    passwordInput = fixture.nativeElement.querySelector('#password');
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have all elements defined', () => {
    const heading = fixture.debugElement.query(By.css('h2'));
    const emailLabel = fixture.debugElement.query(By.css('label[for=email]'));

    const passwordLabel = fixture.debugElement.query(
      By.css('label[for=password]')
    );

    const loginButton = fixture.debugElement.query(
      By.css('button[type=submit]')
    );
    const registerLink = fixture.debugElement
      .query(By.css('a'))
      .nativeElement.innerText.includes('Register');

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
    expect(loginButton).toBeTruthy();
    expect(registerLink).toBeTruthy();
  });

  it('should show no errors when pristine and invalid on first open', () => {
    expect(component.loginForm.valid).toBe(false);

    const emailError = fixture.debugElement.query(By.css('.email-error'));
    expect(emailError).toBeNull();

    const passwordError = fixture.debugElement.query(By.css('.password-error'));
    expect(passwordError).toBeNull();
  });

  it('should show errors when fields are touched and invalid', () => {
    emailInput.value = '';
    emailInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    let emailError = fixture.debugElement.query(By.css('.email-error'));
    expect(emailError).toBeTruthy();

    passwordInput.value = '';
    passwordInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    let passwordError = fixture.debugElement.query(By.css('.password-error'));
    expect(passwordError).toBeTruthy();
  });

  it('should show no errors when all fields are valid', () => {
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));

    passwordInput.value = 'Password1!';
    passwordInput.dispatchEvent(new Event('input'));

    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    const emailError = fixture.nativeElement.querySelector('.email-error');
    expect(emailError).toBeNull();

    const passwordError =
      fixture.nativeElement.querySelector('.password-error');
    expect(passwordError).toBeNull();
  });
});
