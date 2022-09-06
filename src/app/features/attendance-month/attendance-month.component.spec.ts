import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceMonthComponent } from './attendance-month.component';

describe('AttendanceMonthComponent', () => {
  let component: AttendanceMonthComponent;
  let fixture: ComponentFixture<AttendanceMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
