import { Component } from '@angular/core';
import { Product } from './Model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'my-store';
  constructor () {}
}
  
//   productComp: Product = {
//   name: 'bellies',
//     image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-QLrexQKNVqnfXOPnvKtkQNnNjyFzEHndBcWHnmR04NS6ekp`,
//       description: `Available in all size`,
//         alt: `Image on the way`,
//         isAvailable: false

// };

// secondComp: Product = {
//   name: 'bellies',
//     image: `https://img1.junaroad.com/uiproducts/15959323/pri_175_p-1549971662.jpg`,
//       description: `Available in all size`,
//         alt: `Image on the way`,
//         isAvailable: true
// };
// thirdComp: Product = {
//   name: 'floaters',
//     image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNyCM7sGuknLW63iYWqh_ud4g7hgXy0WYX8KB8tfmIL0K2bXpZQ`,
//       description: `Available in all size`,
//         alt: `Image on the way`,
//         isAvailable: true

// };
