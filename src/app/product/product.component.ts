import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 @Input('product') productComp;
  constructor (private router: Router) {  }
  addToCart(){
    console.log('click')
  }
  gotoDetails(productID){
    this.router.navigate(['product', productID]);
  }

  ngOnInit() {
  }

}
