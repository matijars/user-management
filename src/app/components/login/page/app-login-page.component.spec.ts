import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginPageComponent } from './app-login-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppLoginPageComponent', () => {
  let component: AppLoginPageComponent;
  let fixture: ComponentFixture<AppLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLoginPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'test-id' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
