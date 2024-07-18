import { Component, inject } from '@angular/core';
import { AppRegisterFormComponent } from '../form/app-register-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [AppRegisterFormComponent],
  templateUrl: './app-register-page.component.html',
  styleUrl: './app-register-page.component.scss',
})
export class AppRegisterPageComponent {
  router = inject(Router);

  handleSubmit() {
    this.router.navigate(['/login']);
  }
}
