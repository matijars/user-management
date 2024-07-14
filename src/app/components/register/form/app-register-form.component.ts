import { Component, EventEmitter, Output } from '@angular/core';
import { AppRegisterForm } from '../form-model/app-register-form';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app-register-form.component.html',
  styleUrl: './app-register-form.component.scss',
})
export class AppRegisterFormComponent {
  @Output() formSubmit = new EventEmitter<void>();
  registerForm = new AppRegisterForm();
  hide = true;
  hideConfirm = true;

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirm = !this.hideConfirm;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.formSubmit.emit();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
