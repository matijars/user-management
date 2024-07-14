import { Component } from '@angular/core';
import { AppRegisterFormComponent } from '../form/app-register-form.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [AppRegisterFormComponent],
  templateUrl: './app-register-page.component.html',
  styleUrl: './app-register-page.component.scss',
})
export class AppRegisterPageComponent {}
