import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoginForm } from '../form-model/app-login-form';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './app-login-form.component.html',
  styleUrl: './app-login-form.component.scss',
})
export class AppLoginFormComponent {
  @Output() formSubmit = new EventEmitter<void>();
  loginForm = new AppLoginForm();
  hide = true;
  submitting: boolean = false;

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.submitting = true;

      // Added timeout and submitting to simulate request delay
      setTimeout(() => {
        this.formSubmit.emit();

        this.submitting = false;
      }, 1000);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
