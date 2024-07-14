import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserPageComponent } from './app-user-page.component';

describe('AppUserPageComponent', () => {
  let component: AppUserPageComponent;
  let fixture: ComponentFixture<AppUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUserPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
