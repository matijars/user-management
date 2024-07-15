import { Component, inject, OnInit } from '@angular/core';
import { AppUserFormComponent } from '../form/app-user-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AppUserModel,
  AppUsersServiceService,
} from '../../../services/app-users-service.service';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [AppUserFormComponent],
  templateUrl: './app-user-page.component.html',
  styleUrl: './app-user-page.component.scss',
})
export class AppUserPageComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  usersService = inject(AppUsersServiceService);
  user!: AppUserModel;
  action: 'edit' | 'new' | 'view' | 'unknown' = 'unknown';

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const userId = parseInt(idParam);
      this.usersService.getUser(userId).subscribe((user) => {
        this.user = user!;
      });
    }

    this.getAction();
  }

  getAction() {
    const urlSegments = this.route.snapshot.url;
    const lastSegment = urlSegments[urlSegments.length - 1].path;

    switch (lastSegment) {
      case 'edit':
        this.action = 'edit';
        break;
      case 'new':
        this.action = 'new';
        break;
      case 'view':
        this.action = 'view';
        break;
      default:
        this.action = 'unknown';
        break;
    }
  }

  handleSubmit(newUser: any) {
    const user = {
      id: Math.floor(Math.random() * 1000000),
      username: newUser.username,
      email: newUser.email,
    };
    this.usersService.addUser(user);
    this.router.navigate(['/users/list']);
  }
}
