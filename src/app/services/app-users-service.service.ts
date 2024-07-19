import { Injectable, signal, WritableSignal } from '@angular/core';
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
  >([]);

  private usersSignal: WritableSignal<AppUserModel[]> = signal([]);

  // Using observables
  getUsers(): Observable<AppUserModel[]> {
    return this.usersSubject.asObservable();
  }

  getUser(id: number): Observable<AppUserModel | undefined> {
    return this.usersSubject.pipe(
      map((users) => users.find((user) => user.id === id))
    );
  }

  // Using signals
  getUsersBySignal() {
    return this.usersSignal;
  }

  getUserSignal(id: number) {
    return () => {
      const users = this.usersSignal();
      return users.find((user) => user.id === id);
    };
  }

  addUser(user: AppUserModel): void {
    // Add user to subject
    const users = this.usersSubject.getValue();
    this.usersSubject.next([...users, user]);

    // Add user to signal
    const usersSignalArray = this.usersSignal();
    this.usersSignal.set([...usersSignalArray, user]);
  }

  editUser(updatedUser: AppUserModel): void {
    const users = this.usersSubject.getValue();
    const userIndex = users.findIndex((user) => user.id === updatedUser.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;

      // Edit user to subject
      this.usersSubject.next([...users]);

      // edit user with signal
      this.usersSignal.set([...users]);
    }
  }
}
