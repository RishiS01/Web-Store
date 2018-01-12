import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

isLoggedIn:boolean=false;
isLoginUser:string;
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
  	})
  }
  onLogout(){
  	this.authService.logout();
  	this.router.navigate(['/login']);
  }

}
