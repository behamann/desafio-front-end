import { Component, OnInit } from '@angular/core';
import {ProductsService} from './shared/products.service';
import {Product} from './shared/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
      this.products = this.productsService.getProducts();
  }

  deleteProduct(product) {
    if (confirm('Você tem certeza que quer excluir o produto  ' + product.name + '?')) {
      const index = this.products.indexOf(product);
      this.products.splice(index, 1);

      if (!this.productsService.deleteProduct(index)) {
        alert('Não foi possível excluir.');
        // Volta a listagem ao estado original
        this.products.splice(index, 0, product);
      } else {
          alert('Produto excluído com sucesso.');
      }
    }
  }
}
