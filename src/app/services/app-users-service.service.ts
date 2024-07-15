import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

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
  ]);

  getUsers(): Observable<AppUserModel[]> {
    return this.usersSubject.asObservable();
  }

  getUser(id: number): Observable<AppUserModel | undefined> {
    return this.usersSubject.pipe(
      map((users) => users.find((user) => user.id === id))
    );
  }

  addUser(user: AppUserModel): void {
    const currentUsers = this.usersSubject.value;
    const newUsers = [...currentUsers, user];
    this.usersSubject.next(newUsers);
  }
}
