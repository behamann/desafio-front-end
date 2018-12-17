import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
      return products;
    }
    return [];
  }

  getProduct(id) {
    return JSON.parse(localStorage.getItem('products')).filter((product, index) => index == id)[0];
  }

  addProduct(product) {
    let list = JSON.parse(localStorage.getItem('products'));
    if (list == null) {
      list = [];
    }
    list.push(product);
    localStorage.setItem('products', JSON.stringify(list));
    return list;
  }

  updateProduct(index, product) {
    const list = JSON.parse(localStorage.getItem('products')).filter((p, i) => i != index);
    list.push(product);
    localStorage.setItem('products', JSON.stringify(list));
    return list;
  }

  deleteProduct(id) {
    const list = JSON.parse(localStorage.getItem('products')).filter((product, index) => index != id);
    localStorage.setItem('products', JSON.stringify(list));
    return list;
  }
}
