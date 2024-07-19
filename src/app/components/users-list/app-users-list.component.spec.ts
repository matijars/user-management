import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppUsersListComponent } from './app-users-list.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import {
  AppUserModel,
  AppUsersService,
} from '../../services/app-users.service';

describe('AppUsersListComponent', () => {
  let component: AppUsersListComponent;
  let fixture: ComponentFixture<AppUsersListComponent>;
  let usersService: jasmine.SpyObj<AppUsersService>;

  beforeEach(async () => {
    usersService = jasmine.createSpyObj('AppUsersService', ['getUsers']);
    await TestBed.configureTestingModule({
      imports: [RouterModule, CommonModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'test-id' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have all elements defined', () => {
    let addUserBtn = fixture.nativeElement.querySelector('#add-user-btn');
    let signalListBtn = fixture.nativeElement.querySelector('#signal-list-btn');
    let logOutBtn = fixture.nativeElement.querySelector('#log-out-btn');
    let usersTable = fixture.nativeElement.querySelector('#users-table');

    expect(addUserBtn).toBeTruthy();
    expect(signalListBtn).toBeTruthy();
    expect(logOutBtn).toBeTruthy();
    expect(usersTable).toBeTruthy();
  });

  it('should show msg if users lenght is 0', () => {
    const emptyUsersArray: AppUserModel[] = [];
    usersService.getUsers.and.returnValue(of(emptyUsersArray));

    fixture.detectChanges();

    const emptyTableMessage =
      fixture.nativeElement.querySelector('#empty-table');
    expect(emptyTableMessage).toBeTruthy();
  });
});
