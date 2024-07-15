import { Routes } from '@angular/router';
import { AppLoginPageComponent } from './components/login/page/app-login-page.component';
import { AppRegisterPageComponent } from './components/register/page/app-register-page.component';
import { AppUsersListComponent } from './components/users-list/app-users-list.component';
import { AppUserPageComponent } from './components/user/page/app-user-page.component';

export const routes: Routes = [
  { path: 'login', component: AppLoginPageComponent },
  { path: 'register', component: AppRegisterPageComponent },
  { path: 'users/list', component: AppUsersListComponent },
  { path: 'users/new', component: AppUserPageComponent },
  { path: 'users/:id/view', component: AppUserPageComponent },
  { path: 'users/:id/edit', component: AppUserPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
