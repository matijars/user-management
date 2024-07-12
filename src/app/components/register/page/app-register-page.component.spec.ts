import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegisterPageComponent } from './app-register-page.component';

describe('AppRegisterPageComponent', () => {
  let component: AppRegisterPageComponent;
  let fixture: ComponentFixture<AppRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRegisterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
