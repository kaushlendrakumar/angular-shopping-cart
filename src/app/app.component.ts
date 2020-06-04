import { Component, OnInit } from '@angular/core';
import {CommonService} from '../app/services/common/common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  appDetails = {}

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

}
