import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
=======

import { NgxSliderModule } from '@angular-slider/ngx-slider';

>>>>>>> b401e71d75486ea45a0a8c113230de4900d2d6ab
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { FormregisteruserComponent } from './components/formregisteruser/formregisteruser.component';
import { ProfileuserComponent } from './components/profileuser/profileuser.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewindividualproductComponent } from './components/viewindividualproduct/viewindividualproduct.component';
import { PacksComponent } from './components/packs/packs.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
<<<<<<< HEAD
import { FormproductsComponent } from './components/formproducts/formproducts.component';
import { TableproductsComponent } from './components/tableproducts/tableproducts.component';




import { CarouselModule } from 'ngx-owl-carousel-o';


=======
import { FooterhomeComponent } from './components/footerhome/footerhome.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
>>>>>>> susan

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Navbar2Component,
    FormregisteruserComponent,
    ProfileuserComponent,
    UserlistComponent,
    LoginuserComponent,
    ListusersComponent,
    ProductsComponent,
    ViewindividualproductComponent,
    PacksComponent,
    CartComponent,
    CheckoutComponent,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    FooterhomeComponent,
    EditprofileComponent
>>>>>>> susan
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
=======
    FormproductsComponent,
    TableproductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule
>>>>>>> b401e71d75486ea45a0a8c113230de4900d2d6ab
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
