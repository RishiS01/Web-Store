import { Component, OnInit } from '@angular/core';
import { Profile } from '../../Models/profile';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute,Params } from '@angular/router';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import { User } from 'firebase/app';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

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
      this.wbService.getAdminProfile(auth.uid).valueChanges().subscribe(data=>{
      this.profile=data || {} as Profile;
    });
  	})
  }
  createAdminProfile(f:NgForm){
  	this.profile.role='admin';
  	this.wbService.adminProfile(this.profile,this.Authuser.uid)
  }

}