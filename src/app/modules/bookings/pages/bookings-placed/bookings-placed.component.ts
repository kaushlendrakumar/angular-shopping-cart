import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common/common.service';

@Component({
  selector: 'app-bookings-placed',
  templateUrl: './bookings-placed.component.html',
  styleUrls: ['./bookings-placed.component.scss']
})
export class BookingsPlacedComponent implements OnInit {

  constructor(private commonService: CommonService) { 
    this.commonService.updateTotalCartItem('delAll', '');
    this.commonService.appDetails['itemList'].map(item => item.selectedCount = 0);
    this.commonService.appDetails['itemListShow'] = [];
  }

  ngOnInit() {
  }

  homeBtn(){
    this.commonService.redirectToPage('');
  }

  

}
