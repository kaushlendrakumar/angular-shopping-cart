import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsHomeComponent } from './pages/bookings-home/bookings-home.component';
import { BookingsCartComponent } from './pages/bookings-cart/bookings-cart.component';
import { BookingsShippingComponent } from './pages/bookings-shipping/bookings-shipping.component';
import { BookingsPlacedComponent } from './pages/bookings-placed/bookings-placed.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: BookingsHomeComponent
  },
  {
    path: 'cart',
    component: BookingsCartComponent
  },
  {
    path: 'shipping',
    component: BookingsShippingComponent
  },
  {
    path: 'placed',
    component: BookingsPlacedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }