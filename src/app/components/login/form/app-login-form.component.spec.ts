import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginFormComponent } from './app-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppLoginFormComponent', () => {
  let component: AppLoginFormComponent;
  let fixture: ComponentFixture<AppLoginFormComponent>;

  let emailInput: DebugElement;
  let passwordInput: DebugElement;

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

    emailInput = fixture.debugElement.query(By.css('input[name=email]'));
    passwordInput = fixture.debugElement.query(By.css('input[name=password]'));
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
    expect(passwordInput.nativeElement.type).toBe('password');

    const toggleButton = fixture.debugElement.query(
      By.css('button[type=button]')
    );
    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(passwordInput.nativeElement.type).toBe('text');

    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(passwordInput.nativeElement.type).toBe('password');
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

    // Provera greške za email
    emailInput.nativeElement.value = '';
    emailInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const emailError = fixture.debugElement.query(By.css('.email-error'));
    expect(emailError).toBeTruthy();

    // Provera greške za password
    passwordInput.nativeElement.value = '';
    passwordInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const passwordError = fixture.debugElement.query(By.css('.password-error'));
    expect(passwordError).toBeTruthy();
  });
});
