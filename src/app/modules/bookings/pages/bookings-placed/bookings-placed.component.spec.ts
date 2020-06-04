import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsPlacedComponent } from './bookings-placed.component';

describe('BookingsPlacedComponent', () => {
  let component: BookingsPlacedComponent;
  let fixture: ComponentFixture<BookingsPlacedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsPlacedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsPlacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
