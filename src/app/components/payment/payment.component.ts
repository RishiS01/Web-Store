import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { WebStoreService } from '../../services/web-store.service';
import { User } from 'firebase/app';
import { Profile } from '../../Models/profile';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
	isLoginUser:string;
	authUser:User;
	profile ={} as Profile;
  constructor(
  	public wbService:WebStoreService,
  	public authService:AuthServiceService,
  	public toaster:ToastrService
  	) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth=>{
  		this.authUser=auth;
  		this.isLoginUser=this.authUser.email
  		this.wbService.getUserProfile(auth.uid).valueChanges().subscribe(data=>{
      this.profile=data || {} as Profile;
    });
  	})
  }
  makePayment(){
  	this.toaster.success('Payment done successfully');
  }
  makePaymentonDelivery(){
  	this.toaster.success('Order placed successfully');
  }
}
