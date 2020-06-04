import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsCartComponent } from './bookings-cart.component';

describe('BookingsCartComponent', () => {
  let component: BookingsCartComponent;
  let fixture: ComponentFixture<BookingsCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
