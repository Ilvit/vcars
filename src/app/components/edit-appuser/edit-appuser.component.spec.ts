import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppuserComponent } from './edit-appuser.component';

describe('EditAppuserComponent', () => {
  let component: EditAppuserComponent;
  let fixture: ComponentFixture<EditAppuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAppuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAppuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
