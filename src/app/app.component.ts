import { Component } from '@angular/core';
import { WebStoreService } from './services/web-store.service';
import { AuthServiceService } from './services/auth-service.service';
import { Profile } from './Models/profile';
import { User } from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  profile = {} as Profile
constructor(
	public wbService:WebStoreService,
	public authService:AuthServiceService,
  	private router:Router,
	){
		this.authService.getAuth().subscribe(auth=>{
      	if(auth){
      		this.wbService.getUserInfo(auth.uid).valueChanges().subscribe(data=>{
      			this.profile = data;
      			if(this.profile.role === 'guest'){
        			this.router.navigate(['']); 
      			}else{
        			this.router.navigate(['admin-dashboard']);
      			}
    		})
      	}
      	})
	}
}
