import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetWeekwiseComponent } from './timesheet-weekwise.component';

describe('TimesheetWeekwiseComponent', () => {
  let component: TimesheetWeekwiseComponent;
  let fixture: ComponentFixture<TimesheetWeekwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetWeekwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetWeekwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
