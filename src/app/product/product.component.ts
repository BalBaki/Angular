import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi";
  products : Product[]=[
    {id : 1, name : "Laptop", price : 150, categoryId : 1, description : "Monster Laptop",imageUrl:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
    {id : 2, name : "Mouse", price : 10, categoryId : 2, description : "A4 Tech",imageUrl:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
    {id : 1, name : "Laptop", price : 150, categoryId : 1, description : "Monster Laptop",imageUrl:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
    {id : 2, name : "Mouse", price : 10, categoryId : 2, description : "A4 Tech",imageUrl:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
    {id : 1, name : "Laptop", price : 150, categoryId : 1, description : "Monster Laptop",imageUrl:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
    {id : 2, name : "Mouse", price : 10, categoryId : 2, description : "A4 Tech",imageUrl:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}


  ]
  ngOnInit() {
  }

}
