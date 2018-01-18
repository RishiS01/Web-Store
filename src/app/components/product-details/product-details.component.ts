import { Component, OnInit } from '@angular/core';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { User } from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../Models/product';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product = {} as Product;
  Authuser: User;
  $key: string;
  image: any[];
  review = [];
  rating: number;
  oldRating = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public wbService: WebStoreService,
    public authService: AuthServiceService,
    private toast: ToastrService
  ) {
    this.authService.getAuth().subscribe(auth => {
      this.Authuser = auth;
    });
  }

  ngOnInit() {
    this.$key = this.route.snapshot.params['id'];
    this.getProductDetails();
  }

  getProductDetails() {
    if (this.$key === 'undefined') {
      this.router.navigate(['']);
    }
    this.wbService.getProductDetail(this.$key).subscribe((data) => {
      console.log(data);
      data = Object.assign([], data);
      this.product = data;
      this.review = [];
      this.image = this.product.productImage[0];
      if (typeof data.reviews === typeof undefined) {
        this.rating = 0;
      }
      Object.keys(data.reviews).forEach(key => {
        const $key = key;
        const uid = data.reviews[key].uid;
        const rew = data.reviews[key].review;
        const email_id = data.reviews[key].email;
        const ret = data.reviews[key].rating || 0;

        this.review.push({ id: uid, review: rew, email: email_id, $key, rating: ret });
      });
      this.calculateRatings();

    });
  }
  calculateRatings() {
    let count = 0;
    let oldRating = 0;

    this.review.map(obj => {
      if (obj.rating !== 0) {
        const rat = Number(obj.rating);
        oldRating = oldRating + rat;
        count++;
      }
    });
    if (oldRating !== 0) {
      this.rating = oldRating / count;
    } else {
      this.rating = 0;
    }

  }

  displayImage(img, i) {
    this.image = img;
  }
  addProductToCart(product) {

    if (this.Authuser === null) {
      this.router.navigate(['login']);
      this.toast.error('You Need to Login first for this');
    } else {
      this.wbService.userCart(this.Authuser.uid, product);
      this.toast.success('Product added to your cart');
      this.router.navigate(['cart']);
    }
  }
  onSubmitUserReview(f: NgForm) {
    const $this = this;
    if (this.Authuser) {
      const review = ({
        uid: this.Authuser.uid,
        review: f.value.userReview,
        rating: f.value.userrating || undefined,
        email: this.Authuser.email
      });
      if (typeof review.rating === typeof undefined) {
        delete review.rating;
      }
      this.wbService.userReview(this.Authuser.uid, this.$key, review);
      this.getProductDetails();

    } else {
      this.toast.error('You need to login first');
      this.router.navigate(['login']);
    }

  }
  onDeleteReviewC(rev, i) {
    console.log(rev.$key, i);
    if (confirm('Are you Sure?')) {
      this.wbService.deleteReview(this.$key, rev.$key);
      this.toast.success('Your Review deleted');
      this.getProductDetails();
    }
  }

}
