import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetYearwiseComponent } from './timesheet-yearwise.component';

describe('TimesheetYearwiseComponent', () => {
  let component: TimesheetYearwiseComponent;
  let fixture: ComponentFixture<TimesheetYearwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetYearwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetYearwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
