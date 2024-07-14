import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AppUserModel {
  id: number;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppUsersServiceService {
  private usersSubject: BehaviorSubject<AppUserModel[]> = new BehaviorSubject<
    AppUserModel[]
  >([
    { id: 1, username: 'John Thomas', email: 'john.thomas@example.com' },
    { id: 2, username: 'Sarah Miller', email: 'sarah.miller@example.com' },
    { id: 3, username: 'David Wilson ', email: 'david.wilson@example.com' },
    { id: 4, username: 'Laura Davis ', email: 'laura.davis@example.com' },
    { id: 5, username: 'James Martinez ', email: 'james.martinez@example.com' },
  ]);

  getUsers(): Observable<AppUserModel[]> {
    return this.usersSubject.asObservable();
  }
}
