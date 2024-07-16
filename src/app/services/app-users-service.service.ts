import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface AppUserModel {
  id: number;
  username: string;
  email: string;
  type: string;
  pib?: number;
  mbr?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AppUsersServiceService {
  private usersSubject: BehaviorSubject<AppUserModel[]> = new BehaviorSubject<
    AppUserModel[]
  >([
    {
      id: 1,
      username: 'John Thomas',
      email: 'john.thomas@example.com',
      type: 'individual',
    },
    {
      id: 2,
      username: 'Tesla',
      email: 'tesla@example.com',
      type: 'company',
      pib: 123456,
      mbr: 987654,
    },
  ]);

  // {
  //   id: 1,
  //   username: 'John Thomas',
  //   email: 'john.thomas@example.com',
  //   type: 'individual',
  // },
  // {
  //   id: 2,
  //   username: 'Tesla',
  //   email: 'tesla@example.com',
  //   type: 'company',
  //   pib: 123456,
  //   mbr: 987654,
  // },

  getUsers(): Observable<AppUserModel[]> {
    return this.usersSubject.asObservable();
  }

  getUser(id: number): Observable<AppUserModel | undefined> {
    return this.usersSubject.pipe(
      map((users) => users.find((user) => user.id === id))
    );
  }

  addUser(user: AppUserModel): void {
    const users = this.usersSubject.getValue();
    this.usersSubject.next([...users, user]);
  }

  editUser(updatedUser: AppUserModel): void {
    const users = this.usersSubject.getValue();
    const userIndex = users.findIndex((user) => user.id === updatedUser.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      this.usersSubject.next([...users]);
    }
  }
}
