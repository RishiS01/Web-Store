import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { WebStoreService } from "../../../services/web-store.service";
import { AuthServiceService } from "../../../services/auth-service.service";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { User } from "firebase/app";
import { ToastrService } from "ngx-toastr";
import { Profile } from "../../../Models/profile";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
  profile = {} as Profile;
  product = [];
  searchProducts = [];
  Authuser: User;
  categories = [];
  userFilter: any = { name: "" };
  filteredData = this.product;
  review = [];
  rating: number;
  loader = false;
  userFavourite = false;
  showDropdown:boolean = false;

  @ViewChild("input") inputElRef: ElementRef;
  constructor(
    private router: Router,
    public wbService: WebStoreService,
    public authService: AuthServiceService,
    private toast: ToastrService,
  ) {
    // this.toastr.setRootViewContainerRef(vcr);
    this.authService.getAuth().subscribe(auth => {
      this.Authuser = auth;
    });
  }

  ngOnInit() {
    this.loader = true;
    this.wbService.getProductsForUsers().subscribe((data: any[]) => {
      this.loader = false;
      this.product = _.values(data);
      data.map(obj => {
        let count = 0;
        let oldRating = 0;
        if (typeof obj.reviews !== typeof undefined) {
          Object.values(obj.reviews).forEach((key:any) => {
            if (key.rating) {
              const rat = Number(key.rating);
              oldRating = oldRating + rat;
              count++;
            }
          });
          obj.rating = oldRating / count || 0;
        } else {
          obj.rating = 0;
        }
      });
      this.getFavourites();
    });
    this.getCategories();
  }

  toggleDropdown(){
    this.showDropdown =!this.showDropdown;
  }

  toggleFavourite(product) {
    if (this.Authuser === null) {
      this.router.navigate(["login"]);
      this.toast.error("You Need to Login first for this");
    } else {
      if (
        typeof product.userFavourite === typeof undefined ||
        product.userFavourite === false
      ) {
        product.userFavourite = true;
        this.wbService.userFavourite(this.Authuser.uid, product);
        this.toast.success("Added to your Wishlist");
      } else {
        product.userFavourite = false;
        this.onRemoveUserFavourite(product);
      }
    }
  }
  onRemoveUserFavourite(i) {
    this.wbService.removeAsFavourite(this.Authuser.uid, i);
    this.toast.success("Removed from your Wishlist");
  }
  sortPopular() {
    this.product = _.shuffle(this.product);
  }
  sortLowProduct(sort) {
    this.product = _.orderBy(this.product, ["productPrice"], ["asc"]);
  }
  sortHighProduct(sort) {
    this.product = _.orderBy(this.product, ["productPrice"], ["desc"]);
  }
  getFavourites() {
    this.wbService
      .getUserFavouraite(this.Authuser.uid)
      .subscribe((data: any[]) => {
        this.product.map(prod => {
          data.filter(obj => {
            if (prod.id === obj.id) {
              prod.userFavourite = true;
            }
          });
        });
      });
  }
  getCategories() {
    this.wbService.getCategories().subscribe((data: any[]) => {
      const cat = [];
      data.map(obj => {
        obj = Object.assign([], obj);
        this.categories.push(obj);
      });
    });
  }
  search(val: any) {
    if (val) {
      this.filteredData = this.product;
      this.filteredData = this.product.filter(
        d => d.productName.toLowerCase().indexOf(val) >= 0
      );
    }
  }
}
