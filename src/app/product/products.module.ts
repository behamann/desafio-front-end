import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductsService } from './shared/products.service';
import { ProductFormComponent } from './product-form/product-form.component';
import {CurrencyMaskModule} from 'ng2-currency-mask';
// import {CURRENCY_MASK_CONFIG, CurrencyMaskConfig} from 'ng2-currency-mask/src/currency-mask.config';
import {MaterializeModule} from 'angular2-materialize';
import {MaterializeDirective} from './shared/meterialize-directive';

// export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
//     align: 'left',
//     allowNegative: false,
//     decimal: ',',
//     precision: 2,
//     prefix: 'R$ ',
//     suffix: '',
//     thousands: '.'
// };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterializeModule,
    CurrencyMaskModule
  ],
  declarations: [
    ProductsComponent,
    ProductFormComponent,
    MaterializeDirective
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    ProductsService,
    // { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class ProductsModule { }
