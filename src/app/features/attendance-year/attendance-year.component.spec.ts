import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceYearComponent } from './attendance-year.component';

describe('AttendanceYearComponent', () => {
  let component: AttendanceYearComponent;
  let fixture: ComponentFixture<AttendanceYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
