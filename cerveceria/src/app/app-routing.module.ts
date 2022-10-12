import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import {HomeComponent} from './components/home/home.component';
import { PacksComponent } from './components/packs/packs.component';
import { ViewindividualproductComponent } from './components/viewindividualproduct/viewindividualproduct.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'PacksComponent', component:PacksComponent},
  {path:'CartComponent', component:CartComponent},
  {path:'ViewindividualproductComponent', component:ViewindividualproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
