import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common/common.service';

@Component({
  selector: 'app-bookings-shipping',
  templateUrl: './bookings-shipping.component.html',
  styleUrls: ['./bookings-shipping.component.scss']
})
export class BookingsShippingComponent implements OnInit {

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
    } else{
      this.pageDetails['formDetails'] = {
        name : '',
        address:{
          line1: '',
          line2: ''
        },
        city: ''
      }
    }
  }

  ngOnInit() {
  }

  placeOrderBtn(){
    this.commonService.redirectToPage('placed');
  }

}
