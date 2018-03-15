import { Component, OnInit ,Input,Output} from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { WebStoreService } from '../../services/web-store.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Product } from '../../Models/product';
import { User } from 'firebase/app';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { CategoryPipe } from '../../category.pipe';
import { DropzoneModule, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import * as Dropzone from 'dropzone';
import * as _ from 'lodash';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  $key:string;
	product={} as Product;
	id:number;
	authUser:User;
  loader:boolean = false;
  

  categories=[];
   @Input()
    addRemoveLinks:boolean = false;

  constructor(
  	public authService:AuthServiceService,
  	public wbService:WebStoreService,
  	private router:Router,
  	private dom:DomSanitizer,
    private toststr:ToastrService,
   
  	) { 
    
  }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth=>{
  		this.authUser=auth
    })
    this.wbService.getCategories().subscribe((data:any[])=>{
      const cat=[]
       data.map(obj=>{
         obj=Object.assign([],obj)
         this.categories.push(obj.name)
       })
    
    })
  }

  onAddProduct(f:NgForm){
    let $this = this;
  	this.product.productName=f.value.productName;
  	this.product.productDescription=f.value.productDescription;
  	console.log(f.value);
  	this.id = new Date().valueOf();
  	this.product.id = this.id
  	this.authService.getAuth().subscribe(auth=>{
  	this.wbService.addNewProduct(this.product,this.authUser.uid).then(
      function(ref){
        $this.$key = ref.key;
        $this.wbService.newProduct(ref.key,$this.product)
      });
      if(this.categories.indexOf(this.product.productCategory) === -1){
        this.wbService.productCategory(this.product.productCategory);
      }
  	})
    this.router.navigate(['admin-dashboard'])
    this.toststr.success('New Product added','Done');
  }
   

   onRemoveProductImage(img,i,$event){
     console.log($event);
   	if(confirm("sure")){
   		const img=this.product.productImage;
    this.product.productImage.splice(i,1)
   	}
   	console.log(this.product);

   }

  onRemoveImage($event){
    console.log($event);
  }

  onUploadSuccess($event){
    this.loader=true;
	const image= $event[0].dataURL;
	this.dom.bypassSecurityTrustResourceUrl(image);
	if(!this.product.productImage){
		this.product.productImage=[];
		this.product.productImage.push(image)
	}else{
		this.product.productImage.push(image);
	}
  this.loader=false;
}
onUploadProgress($event){
 this.loader=true;
	console.log($event);
}
onUploadError($event){
  if(this.product.productImage.length === 5){
   console.log($event);
  this.toststr.error('You cannot add more files','Oops!!');
  }
}
selectCategory(c){
  console.log(c);
  this.product.productCategory=c.name;

}
onItemAdded($event){
    console.log($event);
  }
onItemRemoved($event,f:NgForm){
    console.log($event);
  }
}
