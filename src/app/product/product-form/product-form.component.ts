import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../shared/product';
import { ProductsService } from '../shared/products.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  product: Product = new Product();
  currentId: number;
  quantityOptions = {
        align: 'left',
        allowNegative: false,
        decimal: ',',
        precision: 0,
        prefix: '',
        suffix: '',
        thousands: ''
    };

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      measurement: ['', [Validators.required]],
      quantity: [],
      price: ['', [Validators.required]],
      perishable: [],
      validity_date: ['', [BasicValidators.validateValidityDate]],
      fabrication_date: ['', [Validators.required, BasicValidators.validateFabricationDate]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentId = params['id'];
      this.title = this.currentId ? 'Editar Produto' : 'Novo Produto';
      if (!this.currentId) {
        return;
      }
      this.product = this.productsService.getProduct(this.currentId);
      if (!this.product) {
        this.router.navigate(['NotFound']);
      }
    });
  }

  changeUnit(e) {
    switch (e) {
        case 'Lt':
            this.quantityOptions.precision = 3;
            this.quantityOptions.suffix = ' lt';
            break;
        case 'Kg':
            this.quantityOptions.precision = 3;
            this.quantityOptions.suffix = ' kg';
            break;
        case 'Un':
            this.quantityOptions.precision = 0;
            this.quantityOptions.suffix = ' un';
            break;
        default:
            this.quantityOptions.precision = 0;
            this.quantityOptions.suffix = '';
            break;
    }
  }

  save() {
    let result = this.form.value;
    const productValue = result;
    if (this.currentId) {
      result = this.productsService.updateProduct(this.currentId, productValue);
    } else {
      result = this.productsService.addProduct(productValue);
    }
    if (result) {
      this.router.navigate(['products']);
    }
  }
}
