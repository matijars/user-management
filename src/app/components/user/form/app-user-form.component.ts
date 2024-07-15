import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppUserForm } from '../form-model/app-user-form';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppUserModel } from '../../../services/app-users-service.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './app-user-form.component.html',
  styleUrl: './app-user-form.component.scss',
})
export class AppUserFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<AppUserForm>();
  @Input() action: 'edit' | 'new' | 'view' | 'unknown' = 'unknown';
  @Input() user!: AppUserModel;
  userForm = new AppUserForm();

  ngOnInit(): void {
    if (this.action === 'view' || this.action === 'edit') {
      this.userForm.controls['username'].setValue(this.user.username);
      this.userForm.controls['email'].setValue(this.user.email);
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.submitForm.emit(this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
