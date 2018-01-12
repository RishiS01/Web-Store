import { Component, OnInit } from '@angular/core';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from 'firebase/app';
import { Router } from '@angular/router';
import { Product } from '../../Models/product';
import * as _ from 'lodash'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

	authUser:User;
    favourite : Product[];
    image:any[];
    review=[];
  constructor(
  	private router:Router,
  	public wbService:WebStoreService,
    public authService:AuthServiceService,
    public toaster:ToastrService
  	) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth=>{
  		this.authUser=auth
  		this.wbService.getUserFavouraite(this.authUser.uid).subscribe((data:any[])=>{
  			this.favourite = _.values(data);
  			// console.log(this.favourite.productImage[0]);
  			 data.map(obj=>{
          let count = 0;
          let oldRating=0
          if(typeof obj.reviews !== typeof undefined){
            Object.values(obj.reviews).forEach(key=>{
              let rat=Number(key.rating)
              oldRating=oldRating+rat || 0;
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
  onRemoveUserFavourite(i){
    if(confirm('Sure to Remove from Favourites?')){
      this.wbService.removeAsFavourite(this.authUser.uid,i);
      this.toaster.success('Removed from favourites');
    }
  }

}
