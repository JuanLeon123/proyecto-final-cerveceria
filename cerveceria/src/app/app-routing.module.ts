import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormproductsComponent } from './components/formproducts/formproducts.component';
import { ProductsComponent } from './components/products/products.component';
import { TableproductsComponent } from './components/tableproducts/tableproducts.component';

const routes: Routes = [
    { path: 'products', component: ProductsComponent},
    { path: 'formproducts', component: FormproductsComponent},
    { path: 'tableproducts', component: TableproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
