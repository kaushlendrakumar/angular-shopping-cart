import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsHomeComponent } from './pages/bookings-home/bookings-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingsCartComponent } from './pages/bookings-cart/bookings-cart.component';
import { BookingsShippingComponent } from './pages/bookings-shipping/bookings-shipping.component';
import { BookingsPlacedComponent } from './pages/bookings-placed/bookings-placed.component';



@NgModule({
  declarations: [BookingsHomeComponent, BookingsCartComponent, BookingsShippingComponent, BookingsPlacedComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedModule
  ]
})
export class BookingsModule { }
