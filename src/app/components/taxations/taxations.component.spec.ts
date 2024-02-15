import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxationsComponent } from './taxations.component';

describe('TaxationsComponent', () => {
  let component: TaxationsComponent;
  let fixture: ComponentFixture<TaxationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
