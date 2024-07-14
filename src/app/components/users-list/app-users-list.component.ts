import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AppUserModel,
  AppUsersServiceService,
} from '../../services/app-users-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-users-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app-users-list.component.html',
  styleUrl: './app-users-list.component.scss',
})
export class AppUsersListComponent implements OnInit {
  users$!: Observable<AppUserModel[]>;
  usersService = inject(AppUsersServiceService);

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }
}
