import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Model/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  
  constructor( private productServices: ProductService){
    this.productServices.getProducts().subscribe(( res : Product[]) => {this.products = res;
      console.log(this.products);});
    }
    

  ngOnInit() {
  }
}
