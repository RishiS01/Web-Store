import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import { Router } from "@angular/router";
import { Product } from "./../Models/product";
import { Profile } from "./../Models/profile";
import { User } from "firebase/app";

@Injectable()
export class WebStoreService {
  sellers: AngularFireList<any[]>;
  users: AngularFireList<any[]>;
  categories: AngularFireList<any>;
  profile: AngularFireObject<any[]>;
  favourites: AngularFireList<any[]>;
  products: AngularFireList<any[]>;
  reviews: AngularFireList<any[]>;

  constructor(private router: Router, public angularFire: AngularFireDatabase) {
    this.sellers = this.angularFire.list("/sellers");
    this.users = this.angularFire.list("/users");
    this.categories = this.angularFire.list("/categories");
    this.favourites = this.angularFire.list("/favourites");
    this.products = this.angularFire.list("/products");
  }

  addNewProduct(product, id) {
    const prod = this.angularFire.list(`sellers/${id}/products`);
    return prod.push(product);
  }
  newProduct(key, product) {
    this.angularFire.list(`/products`).set(key, product);
    return;
  }
  productCategory(category) {
    let c = { name: category };
    this.categories.push(c);
  }
  getCategories() {
    return this.angularFire
      .list("/categories")
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          ...action.payload.val()
        }));
      });
  }
  newUserProfile(profile, uid) {
    const pro = this.angularFire.object(`users/${uid}/profile`);
    pro.set(profile);
    return;
  }
  getUserProfile(i) {
    return this.angularFire.object(`/users/${i}/profile`);
  }
  getProducts(id) {
    return this.angularFire
      .list(`sellers/${id}/products`)
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          ...action.payload.val()
        }));
      });
  }
  deleteProduct(id, pr) {
    this.angularFire.list(`sellers/${id}/products/${pr.key}`).remove();
    this.angularFire.list(`/products/${pr.key}`).remove();
  }
  getProduct(id, key) {
    return this.angularFire
      .object(`sellers/${id}/products/${key}`)
      .snapshotChanges()
      .map(action => {
        const $key = action.payload.key;
        const data = { $key, ...action.payload.val() };
        return data;
      });
  }
  updateProduct(id, $key, pro) {
    delete pro.$key;
    this.angularFire.list(`sellers/${id}/products`).update($key, pro);
    this.angularFire.list(`/products`).update($key, pro);
  }

  getProductsForUsers() {
    return this.angularFire
      .list(`/products`)
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          ...action.payload.val()
        }));
      });
  }
  getProductDetail(id) {
    return this.angularFire
      .object(`products/${id}`)
      .snapshotChanges()
      .map(action => {
        const $key = action.payload.key;
        const data = { $key, ...action.payload.val() };
        return data;
      });
  }
  userCart(id, p) {
    const pro = this.angularFire.object(`users/${id}/cart/${p.$key}`);
    delete p.$key;
    pro.set({ ...p });
  }
  getUserCartProducts(id) {
    return this.angularFire
      .list(`/users/${id}/cart`)
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          ...action.payload.val()
        }));
      });
  }
  userReview(id, key, review) {
    const rew = this.angularFire.object(
      `products/${key}/reviews/${review.uid}`
    );
    return rew.set(review);
  }
  deleteReview(key, id) {
    this.angularFire.list(`products/${key}/reviews/${id}`).remove();
  }
  getUserFavouraite(id) {
    return this.angularFire
      .list(`/users/${id}/favourites`)
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          ...action.payload.val()
        }));
      });
  }
  userFavourite(id, i) {
    const pro = this.angularFire.object(`users/${id}/favourites/${i.key}`);
    pro.set({ ...i });
  }
  removeAsFavourite(id, i) {
    return this.angularFire.object(`users/${id}/favourites/${i.key}`).remove();
  }
  getProductsByCategory() {
    return this.angularFire
      .list(`/products`)
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          ...action.payload.val()
        }));
      });
  }
  removeFromCart(id, pro) {
    return this.angularFire.object(`users/${id}/cart/${pro.key}`).remove();
  }
  getUserInfo(id) {
    return this.angularFire.object(`users/${id}/profile`);
  }
  adminProfile(profile, uid) {
    const pro = this.angularFire.object(`sellers/${uid}/profile`);
    pro.set(profile);
    return;
  }
  getAdminProfile(id) {
    return this.angularFire.object(`/sellers/${id}/profile`);
  }
}
