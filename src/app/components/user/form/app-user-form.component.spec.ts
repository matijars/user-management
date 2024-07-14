import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserFormComponent } from './app-user-form.component';

describe('AppUserFormComponent', () => {
  let component: AppUserFormComponent;
  let fixture: ComponentFixture<AppUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUserFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
