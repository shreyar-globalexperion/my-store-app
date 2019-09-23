import { Injectable } from '@angular/core';
import { Product } from '../Model/product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {



  products: Product[] = [
    {
      id: 1,
      title: 'bellies',
      imageUrl: `https://encrypted-tbn0.gstatic.com/URLs?q=tbn:ANd9GcRM-QLrexQKNVqnfXOPnvKtkQNnNjyFzEHndBcWHnmR04NS6ekp`,
      description: `Available in all size`,
     isAvailable: false,
      amount: 1000
    },
    {
      id: 2,
      title: 'bellies',
      imageUrl: `https://img1.junaroad.com/uiproducts/15959323/pri_175_p-1549971662.jpg`,
      description: `Available in all size`,
      isAvailable: true,
      amount: 1000

    },
    {
      id:3,
      title: 'floaters',
      imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNyCM7sGuknLW63iYWqh_ud4g7hgXy0WYX8KB8tfmIL0K2bXpZQ`,
      description: `Available in all size`,
      isAvailable: true,
      amount: 1000


    }
  ];
  constructor(
    private httpClient: HttpClient
  ) { }
  getProducts() {
    return this.httpClient.get('http://localhost:3000/product');
  }

}
