import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../../../services/auth-service.service";
import { WebStoreService } from "../../../services/web-store.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { User } from "firebase/app";
import { DomSanitizer } from "@angular/platform-browser";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"]
})
export class EditProductComponent implements OnInit {
  // product={} as Product;
  id: number;
  authUser: User;
  $key: string;
  product: any = [];
  loader: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public wbService: WebStoreService,
    public authService: AuthServiceService,
    public dom: DomSanitizer,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.$key = this.route.snapshot.params["id"];
    this.authService.getAuth().subscribe(auth => {
      this.authUser = auth;
      this.wbService
        .getProduct(this.authUser.uid, this.$key)
        .subscribe(data => {
          this.product = data;
        });
    });
  }
  onUpdateProduct() {
    this.wbService.updateProduct(this.authUser.uid, this.$key, this.product);
    this.router.navigate(["admin-dashboard"]);
    this.toastr.success("Product Updated!");
  }

  onRemoveProductImage(i) {
    if (confirm("sure")) {
      this.product.productImage.splice(i, 1);
    }
  }

  onUploadSuccess($event) {
    this.loader = true;
    const image = $event[0].dataURL;
    this.dom.bypassSecurityTrustResourceUrl(image);
    if (!this.product.productImage) {
      this.product.productImage = [];
      this.product.productImage.push(image);
    } else {
      this.product.productImage.push(image);
    }
    this.loader = false;
  }

  onUploadProgress() {
    this.loader = true;
  }

  onUploadError() {}
}
