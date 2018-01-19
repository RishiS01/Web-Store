import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { RouteInfo } from '../../Models/route';
import { WebStoreService } from '../../services/web-store.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

const appRoutes: RouteInfo[] = [
  { path: '/admin-dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/admin-profile', title: ' Profile',  icon: 'person', class: '' },
  { path: '/add-product', title: 'Add_Product',  icon: 'library_add', class: '' },
  { path: '/admin-password', title: 'Change Password',  icon: 'fingerprint', class: '' },
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  isLoggedIn = false;
  isLoginUser: string;
  menuItems: any[];
  constructor(
    public authService: AuthServiceService,
    public wbService: WebStoreService,
    private router: Router
    ) { }

  ngOnInit() {
    this.menuItems = appRoutes.filter(menuItem => menuItem);
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.isLoginUser = auth.email;
      }else {
        this.isLoggedIn = false;
      }
    });
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

