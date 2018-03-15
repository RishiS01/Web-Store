import { Component, OnInit } from '@angular/core';
import { Profile } from '../../Models/profile';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import { User } from 'firebase/app';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
	authUser:User
  constructor(
  	private router:Router,
  	public wbService:WebStoreService,
  	public authService:AuthServiceService,
  	public toast:ToastrService) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth => {
  		this.authUser = auth;
  	})
  }

  onChangeUserPassword(f) {
  const newPassword = f.value.newPassword;
  const checkPassword = f.value.passwordCheck;
  const user = firebase.auth().currentUser;
    if (checkPassword !== newPassword) {
      this.toast.error('Password did not match. please try again', 'Oops!!');
    } else {
	firebase.auth().currentUser.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(firebase.auth().currentUser.email,f.value.password))
    .then((res) => {
      console.log(f.value.password, firebase.auth().currentUser.email)
	  user.updatePassword(newPassword).then((res)=> {
      console.log(newPassword);
      console.log(checkPassword);
      this.toast.success('Password Updated');
   	  this.router.navigate(['']);

    }).catch((err)=> {
      this.toast.error(err.message);
    })
   })
   .catch((err)=>{
      this.toast.error(err.message,'Sorry');
      
    });
  }
}
}
