import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { FavouritesComponent } from './components/user/favourites/favourites.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailsComponent } from './components/user/product-details/product-details.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AdminUpdatePasswordComponent } from './components/admin//admin-update-password/admin-update-password.component';


import { AuthServiceService } from './services/auth-service.service';
import { WebStoreService } from './services/web-store.service';
import { AuthGuard } from './guards/auth.guard';
          // firebase import

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { DropzoneModule, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import * as Dropzone from 'dropzone';


import { ImgPipe } from './img.pipe';
import { CategoryPipe } from './category.pipe';

        // loadash
import * as _ from 'lodash';

          // notifications
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule,
} from 'ngx-toastr';
import {ToastModule} from 'ng2-toastr/ng2-toastr';



import { SortPipe } from './sort.pipe';
import { MenuComponent } from './components/menu/menu.component';




export const firebaseConfig = {
    apiKey:" AIzaSyDQCTzslEHPCFsaSvEzLtNXiGOCPoTu6B8 ",
    authDomain: "web-store-7d371.firebaseapp.com",
    databaseURL: "https://web-store-7d371.firebaseio.com",
    projectId: "web-store-7d371",
    storageBucket: "web-store-7d371.appspot.com",
    messagingSenderId: "493891340543"
  };

const appRoutes: Routes = [
  { path: '', component: UserDashboardComponent},
  { path: 'admin-dashboard', component:AdminDashboardComponent,canActivate:[AuthGuard] },
  { path: 'login', component:LoginComponent },
  { path: 'category/:name', component:CategoriesComponent },
  { path: 'navbar', component:NavbarComponent },
  { path: 'favorite', component:FavouritesComponent,canActivate:[AuthGuard] },
  { path: 'product-detail/:id', component: ProductDetailsComponent },
  { path: 'user-profile', component:UserProfileComponent,canActivate:[AuthGuard] },
  { path: 'register', component:RegisterComponent },
  { path: 'add-product',component: AddProductComponent,canActivate:[AuthGuard]},
  { path: 'cart' , component:CartComponent },
  { path: 'payment',component:PaymentComponent,canActivate:[AuthGuard] },
  { path: 'edit-product/:id',component:EditProductComponent,canActivate:[AuthGuard]},
  { path: 'change-password',component:ChangePasswordComponent,canActivate:[AuthGuard]},
  { path: 'delivery',component:DeliveryComponent,canActivate:[AuthGuard]},
  { path: 'admin-profile', component: AdminProfileComponent, canActivate: [AuthGuard]},
  { path: 'admin-password', component: AdminUpdatePasswordComponent, canActivate: [AuthGuard]},


];
export const dropzone_config: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 5,
  maxFiles: 100,
  acceptedFiles: 'image/*',
  addRemoveLinks: true,
  uploadMultiple: true,
  createImageThumbnails: true,
  autoProcessQueue: true,

};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    CategoriesComponent,
    CartComponent,
    FavouritesComponent,
    NavbarComponent,
    ProductDetailsComponent,
    DeliveryComponent,
    PaymentComponent,
    UserProfileComponent,
    ChangePasswordComponent,
    RegisterComponent,
    AddProductComponent,
    SideBarComponent,
    ImgPipe,
    NavComponent,
    EditProductComponent,
    CategoryPipe,
    SortPipe,
    AdminProfileComponent,
    AdminUpdatePasswordComponent,
    MenuComponent
  ],
  imports: [
    NguiAutoCompleteModule,
    BrowserModule,
  
    FormsModule,
    ToastNoAnimationModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
     DropzoneModule.forRoot(dropzone_config),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      toastComponent: ToastNoAnimation,
    }),
   ToastModule.forRoot()
   ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthServiceService,
    WebStoreService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
