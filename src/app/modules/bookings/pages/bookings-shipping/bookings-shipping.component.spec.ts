import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsShippingComponent } from './bookings-shipping.component';

describe('BookingsShippingComponent', () => {
  let component: BookingsShippingComponent;
  let fixture: ComponentFixture<BookingsShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
