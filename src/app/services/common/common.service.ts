import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  totalCartItem = 0;
  appDetails = {
    notFoundImage: 'https://www.gardensbythebay.com.sg/etc/designs/gbb/clientlibs/images/common/not_found.jpg',
    userName: 'Kaushlendra',
    userAvtar: 'https://p7.hiclipart.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg',
    itemList: [
      {
        id:"01",
        categorieKey: 'bread',
        categorieLabel: 'Bread',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71TwA-eDYzL._SX679_.jpg',
        name: 'Pintola Organic Wholegrain Brown',
        price: 149.00,
        selectedCount: 0
      },
      {
        id:"02",
        categorieKey: 'bread',
        categorieLabel: 'Bread',
        img: 'https://images-na.ssl-images-amazon.com/images/I/618KmHapvQL._SX679_.jpg',
        name: 'HAIM Organic Crispy Wholegrain',
        price: 180.00,
        selectedCount: 0
      },
      {
        id:"03",
        categorieKey: 'dairy',
        categorieLabel: 'Dairy',
        img: 'https://images-na.ssl-images-amazon.com/images/I/91JlYA8CiVL._SY450_.jpg',
        name: 'Patanjali Cow Ghee',
        price: 450.00,
        selectedCount: 0
      },
      {
        id:"04",
        categorieKey: 'dairy',
        categorieLabel: 'Dairy',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71b0D5QmWFL._SX679_.jpg',
        name: 'Patanjali Cow Ghee',
        price: 450.00,
        selectedCount: 0
      }
    ]
  }
  
  public cartItemCount = new Subject<number>();

  constructor(private router: Router) {}

  //start updateTotalCartItem
  updateTotalCartItem(action, itemDetails) {
    if (action === "add") {
      this.appDetails['itemList'].map(item => {
        if(item.id === itemDetails.id){
          item.selectedCount += 1;
        }
      })
      this.totalCartItem += 1;
      this.cartItemCount.next(this.totalCartItem);
    }

    if (action === "del" && this.totalCartItem != 0) {
      this.appDetails['itemList'].map(item => {
        if(item.id === itemDetails.id){
          item.selectedCount -= 1;
        }
      })
      this.totalCartItem -= 1;
      this.cartItemCount.next(this.totalCartItem);
    }

    if(action == "delAll"){
      this.totalCartItem = 0;
      this.cartItemCount.next(this.totalCartItem);
    }

  }
  // end updateTotalCartItem

  //start getTotalCartItem
  getTotalCartItem(): Observable<any> {
    return this.cartItemCount.asObservable();
  }
  //end getTotalCartItem

  // start redirectToPage
  redirectToPage(destination) {
    switch (destination) {
      case 'cart':
        this.router.navigate(["/cart"]);
        break;
      case 'shipping':
        this.router.navigate(["/shipping"]);
        break;
      case 'placed':
        this.router.navigate(["/placed"]);
        break;
      default:
        this.router.navigate(["/"]);
    }
  }
  // end redirectToPage
  
  
}
