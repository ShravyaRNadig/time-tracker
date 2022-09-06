import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamremovememberComponent } from './teamremovemember.component';

describe('TeamremovememberComponent', () => {
  let component: TeamremovememberComponent;
  let fixture: ComponentFixture<TeamremovememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamremovememberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamremovememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
