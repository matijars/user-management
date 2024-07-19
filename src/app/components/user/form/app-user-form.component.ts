import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppUserForm } from '../form-model/app-user-form';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppUserModel } from '../../../services/app-users.service';

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
  submitting: boolean = false;

  ngOnInit(): void {
    if (this.action === 'view' || this.action === 'edit') {
      this.userForm.controls['username'].setValue(this.user.username);
      this.userForm.controls['email'].setValue(this.user.email);
      this.userForm.controls['type'].setValue(this.user.type);
      this.userForm.controls['pib'].setValue(this.user.pib);
      this.userForm.controls['mbr'].setValue(this.user.mbr);
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.submitting = true;

      // Added timeout and submitting to simulate request delay
      setTimeout(() => {
        this.submitForm.emit(this.userForm.value);

        this.submitting = false;
      }, 1000);
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
