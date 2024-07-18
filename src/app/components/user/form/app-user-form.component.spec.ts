import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserFormComponent } from './app-user-form.component';
import { By } from '@angular/platform-browser';

describe('AppUserFormComponent', () => {
  let component: AppUserFormComponent;
  let fixture: ComponentFixture<AppUserFormComponent>;

  let usernameInput: HTMLInputElement;
  let emailInput: HTMLInputElement;
  let typeInput: HTMLInputElement;
  let pibInput: HTMLInputElement;
  let mbrInput: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUserFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    usernameInput = fixture.nativeElement.querySelector('#username');
    emailInput = fixture.nativeElement.querySelector('#email');
    typeInput = fixture.nativeElement.querySelector('#type');
    pibInput = fixture.nativeElement.querySelector('#pib');
    mbrInput = fixture.nativeElement.querySelector('#mbr');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all elements defined', () => {
    const heading = fixture.debugElement.query(By.css('h2'));
    const usernameLabel = fixture.debugElement.query(
      By.css('label[for=username]')
    );
    const emailLabel = fixture.debugElement.query(By.css('label[for=email]'));
    const typeLabel = fixture.debugElement.query(By.css('label[for=type]'));
    const pibLabel = fixture.debugElement.query(By.css('label[for=pib]'));
    const mbrLabel = fixture.debugElement.query(By.css('label[for=mbr]'));

    expect(heading).toBeTruthy();
    expect(usernameLabel).toBeTruthy();
    expect(usernameInput).toBeTruthy();
    expect(emailLabel).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(typeLabel).toBeTruthy();
    expect(typeInput).toBeTruthy();
    expect(pibLabel).toBeTruthy();
    expect(pibInput).toBeTruthy();
    expect(mbrLabel).toBeTruthy();
    expect(mbrInput).toBeTruthy();
  });

  it('should display Add button when action is new', () => {
    component.action = 'new';
    fixture.detectChanges();

    const addButton = fixture.debugElement.query(By.css('.add-edit'));
    expect(addButton).toBeTruthy();
    expect(addButton.nativeElement.textContent.trim()).toBe('Add');
  });

  it('should display Edit button when action is edit', () => {
    component.action = 'edit';
    fixture.detectChanges();

    const editButton = fixture.debugElement.query(By.css('.add-edit'));
    expect(editButton).toBeTruthy();
    expect(editButton.nativeElement.textContent.trim()).toBe('Edit');
  });

  it('should show no errors when pristine and invalid on first open', () => {
    expect(component.userForm.valid).toBe(false);

    const usernameError = fixture.debugElement.query(By.css('.username-error'));
    const emailError = fixture.debugElement.query(By.css('.email-error'));
    const pibError = fixture.debugElement.query(By.css('.pib-error'));
    const mbrError = fixture.debugElement.query(By.css('.mbr-error'));
    expect(usernameError).toBeNull();
    expect(emailError).toBeNull();
    expect(pibError).toBeNull();
    expect(mbrError).toBeNull();
  });

  it('should show errors when fields are touched and invalid', () => {
    usernameInput.value = '';
    usernameInput.dispatchEvent(new Event('input'));
    usernameInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    let usernameError = fixture.debugElement.query(By.css('.username-error'));
    expect(usernameError).toBeTruthy();

    emailInput.value = '';
    emailInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    let emailError = fixture.debugElement.query(By.css('.email-error'));
    expect(emailError).toBeTruthy();

    pibInput.value = '';
    pibInput.dispatchEvent(new Event('input'));
    pibInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    component.userForm.controls['type'].setValue('company');
    fixture.detectChanges();

    let pibError = fixture.debugElement.query(By.css('.pib-error'));
    expect(pibError).toBeTruthy();

    mbrInput.value = '';
    mbrInput.dispatchEvent(new Event('input'));
    mbrInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    let mbrError = fixture.debugElement.query(By.css('.mbr-error'));
    expect(mbrError).toBeTruthy();
  });

  it('should show no errors when all fields are valid', () => {
    usernameInput.value = 'testuser';
    usernameInput.dispatchEvent(new Event('input'));

    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));

    pibInput.value = '12345657';
    pibInput.dispatchEvent(new Event('input'));

    mbrInput.value = '987654321';
    mbrInput.dispatchEvent(new Event('input'));

    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    const emailError = fixture.nativeElement.querySelector('.email-error');
    expect(emailError).toBeNull();

    const usernameError =
      fixture.nativeElement.querySelector('.username-error');
    expect(usernameError).toBeNull();

    const pibError = fixture.nativeElement.querySelector('.pib-error');
    expect(pibError).toBeNull();

    const mbrError = fixture.nativeElement.querySelector('.mbr-error');
    expect(mbrError).toBeNull();
  });
});
