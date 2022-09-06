import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveprojectComponent } from './removeproject.component';

describe('RemoveprojectComponent', () => {
  let component: RemoveprojectComponent;
  let fixture: ComponentFixture<RemoveprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
