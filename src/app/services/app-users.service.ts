import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface AppUserModel {
  id: number;
  username: string;
  email: string;
  type: string;
  pib?: number;
  mbr?: number;
}

class AppUsersStore extends BehaviorSubject<AppUserModel[]> {
  constructor(initialValue: AppUserModel[]) {
    super(initialValue);
  }

  refresh(users: AppUserModel[]): void {
    this.next(users);
  }
}

@Injectable({
  providedIn: 'root',
})
export class AppUsersService {
  private usersStore = new AppUsersStore([]);
  private usersSignal: WritableSignal<AppUserModel[]> = signal(
    this.usersStore.getValue()
  );

  constructor() {
    this.usersStore.subscribe((users) => this.usersSignal.set(users));
  }

  // Using observables
  getUsers(): Observable<AppUserModel[]> {
    return this.usersStore.asObservable();
  }

  getUser(id: number): Observable<AppUserModel | undefined> {
    return this.usersStore.pipe(
      map((users) => users.find((user) => user.id === id))
    );
  }

  // Using signals
  getUsersBySignal(): WritableSignal<AppUserModel[]> {
    return this.usersSignal;
  }

  getUserSignal(id: number) {
    return () => {
      const users = this.usersSignal();
      return users.find((user) => user.id === id);
    };
  }

  addUser(user: AppUserModel): void {
    // Add user to store
    const users = this.usersStore.getValue();
    this.usersStore.refresh([...users, user]);
  }

  editUser(updatedUser: AppUserModel): void {
    const users = this.usersStore.getValue();
    const userIndex = users.findIndex((user) => user.id === updatedUser.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;

      // Edit user in store
      this.usersStore.refresh([...users]);
    }
  }
}
