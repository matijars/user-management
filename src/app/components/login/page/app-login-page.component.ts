import { Component, inject } from '@angular/core';
import { AppLoginFormComponent } from '../form/app-login-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [AppLoginFormComponent],
  templateUrl: './app-login-page.component.html',
  styleUrl: './app-login-page.component.scss',
})
export class AppLoginPageComponent {
  router = inject(Router);
  constructor() {}

  handleSubmit() {
    this.router.navigate(['/users/list']);
  }
}
