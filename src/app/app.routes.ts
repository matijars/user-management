import { Routes } from '@angular/router';
import { AppLoginPageComponent } from './components/login/page/app-login-page.component';
import { AppRegisterPageComponent } from './components/register/page/app-register-page.component';

export const routes: Routes = [
  { path: 'login', component: AppLoginPageComponent },
  { path: 'register', component: AppRegisterPageComponent },
  // { path: 'users/list', component: UsersListPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
