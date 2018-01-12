import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate,Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AuthServiceService } from './../services/auth-service.service';
import { WebStoreService } from './../services/web-store.service';
import { Profile } from './../Models/profile';

@Injectable()

export class AuthGuard implements CanActivate{

isAuthorised:boolean=false;
profile ={} as Profile;
	constructor(
		public angularFireAuth:AngularFireAuth,
		private router:Router,
		public authService:AuthServiceService,
		public wbService : WebStoreService
		){}

	canActivate():Observable<boolean>{
		return this.angularFireAuth.authState.map(auth=>{
			if(!auth){
				this.router.navigate(['/login'])
				return false;
			}else {
				return true;
			}
		});
	}
}

