import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { User } from 'firebase/app';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = [];
  product = [];
  name: string;
  Authuser: User;

  constructor(
    public wbService: WebStoreService,
    public authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    public toast: ToastrService
  ) {
    this.authService.getAuth().subscribe(auth => {
      this.Authuser = auth;
    });
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.getProductDetails();
    });

  }

  getProductDetails() {
    this.wbService.getProductsByCategory().subscribe((data: any[]) => {
      data.map(obj => {
        let count = 0;
        let oldRating = 0;
        if (typeof obj.reviews !== typeof undefined) {
          Object.values(obj.reviews).forEach(key => {
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
        if (this.name === obj.productCategory) {
          this.product.push(obj);
        }
      });
      this.getFavourites();
    });
  }
  toggleFavourite(product) {
    if (this.Authuser === null) {
      this.router.navigate(['login']);
      this.toast.error('You Need to Login first for this');
    } else {
      if ( typeof product.userFavourite === typeof undefined || product.userFavourite === false) {
        product.userFavourite = true;
        this.wbService.userFavourite(this.Authuser.uid, product);
        this.toast.success('Added to your Wishlist');
      } else {
        product.userFavourite = false;
        this.wbService.removeAsFavourite(this.Authuser.uid, product);
        this.toast.success('Removed from your Wishlist');
      }
    }
  }
  sortPopular(sort) {
    this.product = _.shuffle(this.product);
  }
  sortLowProduct(sort) {
    this.product = _.orderBy(this.product, ['productPrice'], ['asc']);
  }
  sortHighProduct(sort) {
    this.product = _.orderBy(this.product, ['productPrice'], ['desc']);
  }
  getFavourites() {
    this.wbService.getUserFavouraite(this.Authuser.uid).subscribe((data: any[]) => {
      this.product.map(prod => {
        data.filter(obj => {
          if (prod.id === obj.id) {
            prod.userFavourite = true;
          }
        });
      });
    });
  }

}
