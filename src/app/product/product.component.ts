import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productComp = {
    name: `bags`,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-QLrexQKNVqnfXOPnvKtkQNnNjyFzEHndBcWHnmR04NS6ekp`,
    description: `Available in all size`
  }
  constructor() { }
  

  ngOnInit() {
  }

}
