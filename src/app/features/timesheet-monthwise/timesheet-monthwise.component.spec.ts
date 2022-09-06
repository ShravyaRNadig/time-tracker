import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetMonthwiseComponent } from './timesheet-monthwise.component';

describe('TimesheetMonthwiseComponent', () => {
  let component: TimesheetMonthwiseComponent;
  let fixture: ComponentFixture<TimesheetMonthwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetMonthwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetMonthwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
