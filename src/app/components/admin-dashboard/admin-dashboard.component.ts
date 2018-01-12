import { Component, OnInit } from '@angular/core';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from 'firebase/app';
import { Router } from '@angular/router';
import { Product } from '../../Models/product';
import * as _ from 'lodash'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
	authUser:User;
  product={} as Product;
  
  constructor(
  	  private router:Router,
  	  public wbService:WebStoreService,
      public authService:AuthServiceService,
      public toaster:ToastrService
    ) 
    { 
    
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=>{
      this.authUser = auth;
      console.log(this.authUser);
      this.wbService.getProducts(this.authUser.uid).subscribe((data:any[])=>{
      console.log(typeof data);
      console.log(data);
     this.product = _.values(data);
     console.log(typeof this.product);
    });
    })
  	
  }
  onDeleteProduct(prod){
    if(confirm('Sure to delete?')){
      this.wbService.deleteProduct(this.authUser.uid,prod);
      this.toaster.success('Product Removed');
    }
  }

}
