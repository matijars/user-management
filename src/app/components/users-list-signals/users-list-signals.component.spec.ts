import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUsersListSignalsComponent } from './users-list-signals.component';
import {
  AppUserModel,
  AppUsersServiceService,
} from '../../services/app-users-service.service';
import { of } from 'rxjs';
import { signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

describe('UsersListSignalsComponent', () => {
  let component: AppUsersListSignalsComponent;
  let fixture: ComponentFixture<AppUsersListSignalsComponent>;
  let usersService: jasmine.SpyObj<AppUsersServiceService>;

  beforeEach(async () => {
    usersService = jasmine.createSpyObj('AppUsersServiceService', [
      'getUsersBySignal',
    ]);
    await TestBed.configureTestingModule({
      imports: [AppUsersListSignalsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'test-id' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppUsersListSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all elements defined', () => {
    let addUserBtn = fixture.nativeElement.querySelector('#add-user-btn');
    let observableListBtn = fixture.nativeElement.querySelector(
      '#observable-list-btn'
    );
    let logOutBtn = fixture.nativeElement.querySelector('#log-out-btn');
    let usersTable = fixture.nativeElement.querySelector('#users-table');

    expect(addUserBtn).toBeTruthy();
    expect(observableListBtn).toBeTruthy();
    expect(logOutBtn).toBeTruthy();
    expect(usersTable).toBeTruthy();
  });

  it('should show msg if users lenght is 0', () => {
    const usersSignal = signal<AppUserModel[]>([]);
    usersService.getUsersBySignal.and.returnValue(usersSignal);

    fixture.detectChanges();

    const emptyTableMessage =
      fixture.nativeElement.querySelector('#empty-table');
    expect(emptyTableMessage).toBeTruthy();
  });
});
