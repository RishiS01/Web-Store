import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebStoreService } from '../../../services/web-store.service';
import { AuthServiceService } from '../../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Profile } from '../../../Models/profile';
import { User } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
profile ={} as Profile;
res:User
  constructor(
  	public wbService:WebStoreService,
  	public authService:AuthServiceService,
  	private router:Router,
    private toaster:ToastrService
  	) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.router.navigate([''])
      }
    })

  }
  signInWithFacebook(){
  	this.authService.signInWithFacebook()
  	.then((res)=>{
  		this.router.navigate([''])
      this.toaster.success('Logged-in successfully')
  	})
  	.catch((err)=>{
  		this.router.navigate(['/login'])
      this.toaster.error(err.message,'Sorry')
  	})
  }
  signInWithGoogle(){
  	this.authService.signInWithGoogle()
  	.then((res)=>{
  		this.router.navigate([''])
      this.toaster.success('Logged-in successfully')
  	})
  	.catch((err)=>{
  		this.router.navigate(['/login'])
      this.toaster.error(err.message,'Sorry')
  	})
  }
  signInWithEmail(){
  this.authService.signInWithEmail(this.email,this.password)
    .then((res:any) =>{
      let login =  this.wbService.getUserInfo(res.uid).valueChanges().subscribe(data=>{
        return  this.profile = data;
      })
      
      if(this.profile.role === 'guest'){
        this.toaster.success('Logged-in successfully')
        this.router.navigate(['']); 
      }else{
          this.router.navigate(['admin-dashboard']);
          }
    })
    .catch((err) =>{
      this.toaster.error(err.message,'Sorry')
      this.router.navigate(['/login']);
    })
  }

}
