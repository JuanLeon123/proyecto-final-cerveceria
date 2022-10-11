import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CartComponent } from './components/cart/cart.component';
import {HomeComponent} from './components/home/home.component';
import { PacksComponent } from './components/packs/packs.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'PacksComponent', component:PacksComponent},
  {path:'CartComponent', component:CartComponent}
=======
import { FormproductsComponent } from './components/formproducts/formproducts.component';
import { ProductsComponent } from './components/products/products.component';
import { TableproductsComponent } from './components/tableproducts/tableproducts.component';

const routes: Routes = [
    { path: 'products', component: ProductsComponent},
    { path: 'formproducts', component: FormproductsComponent},
    { path: 'tableproducts', component: TableproductsComponent}
>>>>>>> b401e71d75486ea45a0a8c113230de4900d2d6ab
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
