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
// cart={} as Product;
total:number; 
cart=[];
  constructor(
  	 private router:Router,
  	 public wbService:WebStoreService,
     public authService:AuthServiceService,
     private toaster:ToastrService
  	) {
      
     }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth=>{
  		this.authUser=auth
  		this.wbService.getUserCartProducts(this.authUser.uid).subscribe((data:any[])=>{
  			this.cart = _.values(data);
        data.map(obj=>{
          obj.quantity = 1;
          let count = 0;
          let oldRating=0
          if(typeof obj.reviews !== typeof undefined){
            Object.values(obj.reviews).forEach(key=>{
              if(key.rating){
                let rat=Number(key.rating);
                oldRating=oldRating+rat 
                count++
              }
              
            })
            obj.rating = oldRating/count;
          }else{
          obj.rating=0;
          }
          this.getTotal();
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
  getTotal(){
    let total = 0;
    this.cart.forEach(items=>{
      let amount = items.productPrice * items.quantity
     total= total+amount
    })
    this.total = total;
    console.log(this.total); 
  }
 onChange($event){
   console.log($event);
   this.getTotal()
 }

}
