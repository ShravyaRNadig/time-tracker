import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDaywiseComponent } from './timesheet-daywise.component';

describe('TimesheetDaywiseComponent', () => {
  let component: TimesheetDaywiseComponent;
  let fixture: ComponentFixture<TimesheetDaywiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetDaywiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetDaywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
