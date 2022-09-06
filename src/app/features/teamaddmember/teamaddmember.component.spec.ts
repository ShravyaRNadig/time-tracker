import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamaddmemberComponent } from './teamaddmember.component';

describe('TeamaddmemberComponent', () => {
  let component: TeamaddmemberComponent;
  let fixture: ComponentFixture<TeamaddmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamaddmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamaddmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
