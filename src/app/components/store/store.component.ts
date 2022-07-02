import { Component} from '@angular/core';
import {ProductRepository} from "../../model/productRepository";
import {Product} from "../../model/product";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  constructor(private repository:ProductRepository) {
  }


  getProducts(): Product[] {
    return this.repository.getProducts();
  }
  getCategories(): string[] {
    return this.repository.getCategories();
  }



}
