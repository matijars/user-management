import { Component, inject, OnInit } from '@angular/core';
import {
  AppUserModel,
  AppUsersService,
} from '../../services/app-users.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list-signals',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './users-list-signals.component.html',
  styleUrl: './users-list-signals.component.scss',
})
export class AppUsersListSignalsComponent implements OnInit {
  usersService = inject(AppUsersService);
  users!: AppUserModel[];

  ngOnInit(): void {
    this.users = this.usersService.getUsersBySignal()();
  }
}
