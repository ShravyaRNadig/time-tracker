import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmemberprojectComponent } from './addmemberproject.component';

describe('AddmemberprojectComponent', () => {
  let component: AddmemberprojectComponent;
  let fixture: ComponentFixture<AddmemberprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmemberprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmemberprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
