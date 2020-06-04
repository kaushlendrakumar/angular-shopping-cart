import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common/common.service';
@Component({
  selector: 'app-bookings-home',
  templateUrl: './bookings-home.component.html',
  styleUrls: ['./bookings-home.component.scss']
})
export class BookingsHomeComponent implements OnInit {
  
  pageDetails = {}
  constructor(private commonService: CommonService) {
    this.pageDetails['details'] = this.commonService.appDetails;
    this.pageDetails['details']['itemListShow'] = this.pageDetails['details']['itemList'];
  }


  ngOnInit() {
    this.pageDetails['filterDetails'] = {
      filterList : {},
      filterBy: ''
    }
    this.pageDetails['details']['itemList'].map((item, key) => {
        if(!this.pageDetails['filterDetails']['filterList'][item.categorieKey]){
          this.pageDetails['filterDetails']['filterList'][item.categorieKey] = item.categorieLabel;
        }
    });
    this.pageDetails['itemListShow'] = this.pageDetails['itemList'];

  }

  // start updateCartItem
  updateCartItem(action, itemDetails){
    this.commonService.updateTotalCartItem(action, itemDetails)
  }
  // end updateCartItem

  // startfiterChange
  fiterChange(currentItem){
    this.pageDetails['filterDetails']['filterBy'] = currentItem;
    if(currentItem){
      this.pageDetails['details']['itemListShow'] = this.pageDetails['details']['itemList'].filter(item => item.categorieKey === currentItem);
    } else{
      this.pageDetails['details']['itemListShow'] = this.pageDetails['details']['itemList'];
    }
  }
  // end fiterChange

}