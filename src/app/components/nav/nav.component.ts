import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from 'firebase/app';
import * as _ from 'lodash';
import { Profile } from '../../Models/profile';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

isLoggedIn:boolean=false;
isLoginUser:string;
product=[];
searchProducts=[];
filteredData = this.product;
profile ={} as Profile;
  constructor(
  	public wbService:WebStoreService,
  	public authService:AuthServiceService,
  	private router:Router
  	) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth=>{
  		if(auth){
  			this.isLoggedIn=true;
  			this.isLoginUser=auth.email;
  		}else{
  			this.isLoggedIn=false;
  		}
      this.wbService.getUserProfile(auth.uid).valueChanges().subscribe(data=>{
      console.log(data)
      this.profile=data || {} as Profile;
    })
  	})
    this.wbService.getProductsForUsers().subscribe((data:any[])=>{
     this.product = _.values(data);
    });
  }
  onLogout(){
  	this.authService.logout();
  	this.router.navigate(['/login']);
  }
  search(val: any) {
    if (val) {
      this.filteredData = this.product ;
      this.filteredData = this.product.filter(d => d.productName.toLowerCase().indexOf(val) >= 0);
    }else{
      this.filteredData = [];
    }
}

}
