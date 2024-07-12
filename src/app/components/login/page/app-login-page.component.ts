import { Component } from '@angular/core';
import { AppLoginFormComponent } from '../form/app-login-form.component';

@Component({
  selector: 'app-app-login-page',
  standalone: true,
  imports: [AppLoginFormComponent],
  templateUrl: './app-login-page.component.html',
  styleUrl: './app-login-page.component.scss',
})
export class AppLoginPageComponent {
  constructor() {}

  handleLogin() {
    console.log('Logged in!');
  }
}
