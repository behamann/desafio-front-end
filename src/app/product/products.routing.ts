import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form/product-form.component';

const productsRoutes: Routes = [
  { path: 'products', component: ProductsComponent, pathMatch: 'full' },
  { path: 'products/new', component: ProductFormComponent},
  { path: 'products/:id', component: ProductFormComponent}
];

export const productsRouting = RouterModule.forChild(productsRoutes);
