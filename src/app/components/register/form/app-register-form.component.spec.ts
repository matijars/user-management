import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegisterFormComponent } from './app-register-form.component';

describe('AppRegisterFormComponent', () => {
  let component: AppRegisterFormComponent;
  let fixture: ComponentFixture<AppRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRegisterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
