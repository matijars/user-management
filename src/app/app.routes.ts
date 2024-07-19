import { Routes } from '@angular/router';
import { AppLoginPageComponent } from './components/login/page/app-login-page.component';
import { AppRegisterPageComponent } from './components/register/page/app-register-page.component';
import { AppUsersListComponent } from './components/users-list/app-users-list.component';
import { AppUserPageComponent } from './components/user/page/app-user-page.component';
import { AppUsersListSignalsComponent } from './components/users-list-signals/users-list-signals.component';

export const routes: Routes = [
  { path: 'login', component: AppLoginPageComponent },
  { path: 'register', component: AppRegisterPageComponent },
  { path: 'users/list', component: AppUsersListComponent },
  { path: 'users/signal-list', component: AppUsersListSignalsComponent },
  { path: 'users/new', component: AppUserPageComponent },
  { path: 'users/:userId/view', component: AppUserPageComponent },
  { path: 'users/:userId/edit', component: AppUserPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
