import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../Models/profile';
import { WebStoreService } from '../../../services/web-store.service';
import { AuthServiceService } from '../../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'firebase/app';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

	Authuser:User;
	profile ={} as Profile;
  constructor( 
  	private router:Router,
  	private toaster:ToastrService,
  	public wbService:WebStoreService,
  	public authService:AuthServiceService
  	) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth=>{
  		this.Authuser=auth
      this.wbService.getUserProfile(auth.uid).valueChanges().subscribe(data=>{
      this.profile=data || {} as Profile;
    });
  	})
  }
  createUserProfile(f:NgForm){
  	this.profile.role='guest';
  	this.wbService.newUserProfile(this.profile,this.Authuser.uid)
  }

}
