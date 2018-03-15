import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { WebStoreService } from '../services/web-store.service';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthServiceService {

  constructor(
  	public wbService:WebStoreService,
  	public router:Router,
  	public angularFireAuth:AngularFireAuth
  	) { }

  getAuth(){
  	return this.angularFireAuth.authState;
  }
  signInWithFacebook(){
  	return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  signInWithGoogle(){
  	return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  signInWithEmail(email:string,password:string){
  	return new Promise((resolve,reject)=>{
  		this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
  	.then(userData=>resolve(userData),
  	  err => reject(err))
   	});
  }	
  newUser(email:string,password:string){
  	return new Promise((resolve,reject)=>{
  		this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
  	.then(userData=>resolve(userData),
  	  err => reject(err))
   	});
  }
  logout(){
  	return this.angularFireAuth.auth.signOut();
  }
}



