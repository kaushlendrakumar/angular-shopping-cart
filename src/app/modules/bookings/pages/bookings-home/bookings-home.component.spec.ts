import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsHomeComponent } from './bookings-home.component';

describe('BookingsHomeComponent', () => {
  let component: BookingsHomeComponent;
  let fixture: ComponentFixture<BookingsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
