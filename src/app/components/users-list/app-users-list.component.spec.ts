import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUsersListComponent } from './app-users-list.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

describe('AppUsersListComponent', () => {
  let component: AppUsersListComponent;
  let fixture: ComponentFixture<AppUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Ne dodajemo AppUsersListComponent u 'declarations' već ga uvozimo u 'imports'
      imports: [RouterModule, CommonModule],
      providers: [
        // Provide a mock ActivatedRoute with a params observable
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'test-id' }), // Mock params as needed
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

  // Dodaj ostale testove ovde
});
