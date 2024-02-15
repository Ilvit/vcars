import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedAppuserComponent } from './connected-appuser.component';

describe('ConnectedAppuserComponent', () => {
  let component: ConnectedAppuserComponent;
  let fixture: ComponentFixture<ConnectedAppuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedAppuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectedAppuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
