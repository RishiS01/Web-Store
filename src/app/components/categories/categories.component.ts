import { Component, OnInit } from '@angular/core';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	categories=[];
  product=[];
  name:string;
  sort=['Popularity','Price Low to High' ,'Price High to Low']
  constructor(
  	public wbService:WebStoreService,
  	public authService:AuthServiceService,
    private router:Router,
    private route:ActivatedRoute
  	) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.name = params['name']
       this.wbService.getProductsByCategory().subscribe((data:any[])=>{
      console.log(data);
      data.map(obj=>{
         // data.map(obj=>{
          let count = 0;
          let oldRating=0
          if(typeof obj.reviews !== typeof undefined){
            Object.values(obj.reviews).forEach(key=>{
              let rat=Number(key.rating)
              oldRating=oldRating+rat 
              count++
            })
            obj.rating = oldRating/count;
          }else{
          obj.rating=0;
          }
        // })
        if(this.name === obj.productCategory){
          this.product.push(obj)
        }
        console.log(this.product);
        
      })
    })
       
    })
    
  }
  onAddUserFavourite(i){
    console.log(i);
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

}
