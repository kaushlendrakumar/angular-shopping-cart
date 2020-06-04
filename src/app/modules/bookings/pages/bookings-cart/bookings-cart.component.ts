import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common/common.service';

@Component({
  selector: 'app-bookings-cart',
  templateUrl: './bookings-cart.component.html',
  styleUrls: ['./bookings-cart.component.scss']
})
export class BookingsCartComponent implements OnInit {

  pageDetails = {}
  constructor(private commonService: CommonService) {
    this.pageDetails['details'] = this.commonService.appDetails;
    this.pageDetails['selectdItems'] = 
      this.pageDetails['details']['itemList'].filter(item => item.selectedCount > 0);
    this.pageDetails['totalPrice'] = 0;
    this.pageDetails['selectdItems'].map(item => {
      this.pageDetails['totalPrice'] += (item.selectedCount * item.price);
    });
    if(this.pageDetails['selectdItems'].length === 0){
      this.commonService.redirectToPage('');
    }
  }

  ngOnInit() {
  }

  // start updateCartItem
  updateCartItem(action, itemDetails){
    this.commonService.updateTotalCartItem(action, itemDetails);
    this.pageDetails['totalPrice'] = 0;
    this.pageDetails['selectdItems'].map(item => {
      this.pageDetails['totalPrice'] += (item.selectedCount * item.price);
    });
  }
  // end updateCartItem

  checkoutBtn(){
    this.commonService.redirectToPage('shipping');
  }

}
