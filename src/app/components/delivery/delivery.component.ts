import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { WebStoreService } from '../../services/web-store.service';
import { User } from 'firebase/app';
import { Profile } from '../../Models/profile';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
	isLoginUser:string;
	authUser:User;
	profile ={} as Profile;
  constructor(
  	public wbService:WebStoreService,
  	public authService:AuthServiceService
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

}
