import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { PacksComponent } from './components/packs/packs.component';
import { FormproductsComponent } from './components/formproducts/formproducts.component';
import { ProductsComponent } from './components/products/products.component';
import { TableproductsComponent } from './components/tableproducts/tableproducts.component';
import {FormregisteruserComponent} from './components/formregisteruser/formregisteruser.component';
import  {ListusersComponent} from './components/listusers/listusers.component';
import {LoginuserComponent} from './components/loginuser/loginuser.component';  
import {ProfileuserComponent} from './components/profileuser/profileuser.component';
import {EditprofileComponent} from './components/editprofile/editprofile.component';
import {ListproductsComponent} from './components/listproducts/listproducts.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'PacksComponent', component: PacksComponent },
  { path: 'CartComponent', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'formproducts', component: FormproductsComponent },
  { path: 'tableproducts', component: TableproductsComponent },
  {path: 'RegistrarUsuario', component:FormregisteruserComponent},
  {path: 'ListadoUsuarios', component:ListusersComponent},
  {path: 'Login', component:LoginuserComponent },
  {path: 'PerfilUsuario', component:ProfileuserComponent},
  {path: 'EditarPerfil', component: EditprofileComponent},
  {path: 'ListadoProductos', component: ListproductsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
