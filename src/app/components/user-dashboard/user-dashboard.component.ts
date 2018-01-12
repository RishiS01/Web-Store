import { Component, OnInit,ChangeDetectorRef,ViewChild, ElementRef } from '@angular/core';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { Product } from '../../Models/product';
import * as _ from 'lodash'; 
import { User } from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { CategoryPipe } from '../../category.pipe';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

// product={} as Product;
  product=[];
  searchProducts=[];
  Authuser:User
  categories=[];
  userFilter: any = { name: '' };
  filteredData = this.product;
  review=[];
  rating:number;
  loader:boolean = false;
  // oldRating:number=0
    @ViewChild('input') inputElRef: ElementRef
  constructor(
    private router:Router,
    public wbService:WebStoreService,
    public authService:AuthServiceService,
    private toast:ToastrService,
    private cdref: ChangeDetectorRef
  ) { 
    this.authService.getAuth().subscribe(auth=>{
      this.Authuser=auth
    })
  }

  ngOnInit() {
    this.loader = true;
    this.wbService.getProductsForUsers().subscribe((data:any[])=>{
    this.loader = false;
      this.product = _.values(data);
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
    });
     
    this.wbService.getCategories().subscribe((data:any[])=>{
      const cat=[]
       data.map(obj=>{
         obj=Object.assign([],obj)
         this.categories.push(obj)
       })
    })
    
  }
  onAddUserFavourite(i){
      if(this.Authuser === null){
      this.router.navigate(['login']);
      this.toast.error('You Need to Login first for this');
    }else{
      this.wbService.userFavourite(this.Authuser.uid,this.product[i])
    }
  }
  sortPopular(sort){
    this.product= _.shuffle(this.product);
  }
  sortLowProduct(sort){
    this.product = _.orderBy(this.product, ['productPrice'], [ 'asc']); 
  }
  sortHighProduct(sort){
    this.product = _.orderBy(this.product, ['productPrice'], [ 'desc']); 
  }
search(val: any) {
    if (val) {
      this.filteredData = this.product ;
      this.filteredData = this.product.filter(d => d.productName.toLowerCase().indexOf(val) >= 0);
  }
}

}
