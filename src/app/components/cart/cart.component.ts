import { Component, OnInit } from '@angular/core';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from 'firebase/app';
import { Router } from '@angular/router';
import { Product } from '../../Models/product';
import * as _ from 'lodash'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

authUser:User;
cart={} as Product;
  
  constructor(
  	 private router:Router,
  	 public wbService:WebStoreService,
     public authService:AuthServiceService,
     private toaster:ToastrService
  	) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth=>{
  		this.authUser=auth
  		this.wbService.getUserCartProducts(this.authUser.uid).subscribe((data:any[])=>{
  			console.log( data);
  			this.cart = _.values(data);
  			console.log(this.cart);
        data.map(obj=>{
          let count = 0;
          let oldRating=0
          if(typeof obj.reviews !== typeof undefined){
            Object.values(obj.reviews).forEach(key=>{
              let rat=Number(key.rating) || 0;
              oldRating=oldRating+rat 
              count++
            })
            obj.rating = oldRating/count;
          }else{
          obj.rating=0;
          }
        })
  		})
  	})
  }
  onDeleteProduct(product){
    if(confirm('Sure to Remove from cart?')){
      this.wbService.removeFromCart(this.authUser.uid,product);
      this.toaster.success('Removed from Cart');
    }
  }

}
