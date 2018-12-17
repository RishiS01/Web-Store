import { Component, OnInit } from "@angular/core";
import { WebStoreService } from "../../../services/web-store.service";
import { AuthServiceService } from "../../../services/auth-service.service";
import { ToastrService } from "ngx-toastr";
import { Router} from "@angular/router";
import * as firebase from "firebase/app";
import { User } from "firebase/app";

@Component({
  selector: "app-admin-update-password",
  templateUrl: "./admin-update-password.component.html",
  styleUrls: ["./admin-update-password.component.css"]
})
export class AdminUpdatePasswordComponent implements OnInit {
  authUser: User;
  constructor(
    private router: Router,
    public wbService: WebStoreService,
    public authService: AuthServiceService,
    public toast: ToastrService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      this.authUser = auth;
    });
  }
  onChangeUserPassword(f) {
    const newPassword = f.value.newPassword;
    const checkPassword = f.value.passwordCheck;
    const user = firebase.auth().currentUser;
    if (checkPassword !== newPassword) {
      this.toast.error("Password did not match. please try again", "Oops!!");
    } else {
      firebase
        .auth()
        .currentUser.reauthenticateWithCredential(
          firebase.auth.EmailAuthProvider.credential(
            firebase.auth().currentUser.email,
            f.value.password
          )
        )
        .then(res => {
          user
            .updatePassword(newPassword)
            .then(res => {
              this.toast.success("Password Updated");
              this.router.navigate(["admin-dashboard"]);
            })
            .catch(err => {
              this.toast.error(err.message);
            });
        })
        .catch(err => {
          this.toast.error(err.message, "Sorry");
        });
    }
  }
}
