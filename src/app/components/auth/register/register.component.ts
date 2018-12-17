import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebStoreService } from '../../../services/web-store.service';
import { AuthServiceService } from '../../../services/auth-service.service';
import { Profile } from '../../../Models/profile';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

email:string;
password:string;
profile={} as Profile;

  constructor(
  	public wbservice:WebStoreService,
  	public authService:AuthServiceService,
  	private router:Router
  	) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.router.navigate([''])
      }
    })
  }

  onRegisterUser(){

    this.authService.newUser(this.email,this.password)
    .then((res)=>{
      this.profile.role='guest'
      this.authService.getAuth().subscribe(auth=>{
        this.wbservice.newUserProfile(this.profile,auth.uid)
      })
      this.router.navigate(['']);
    })
    .catch((err)=>{
      this.router.navigate(['/login']);
    })

  }

}
