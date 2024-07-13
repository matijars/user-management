import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoginForm } from '../form-model/app-login-form';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app-login-form.component.html',
  styleUrl: './app-login-form.component.scss',
})
export class AppLoginFormComponent {
  @Output() formSubmit = new EventEmitter<void>();
  loginForm = new AppLoginForm();
  hide = true;

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.formSubmit.emit();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
