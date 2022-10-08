import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormregisteruserComponent} from './components/formregisteruser/formregisteruser.component';
import {ProfileuserComponent} from './components/profileuser/profileuser.component';
import  {ListusersComponent} from './components/listusers/listusers.component';
import {LoginuserComponent} from './components/loginuser/loginuser.component';
import {HomeComponent} from './components/home/home.component';
import {EditprofileComponent} from './components/editprofile/editprofile.component'


const routes: Routes = [
  {path: 'RegistrarUsuario', component:FormregisteruserComponent},
  {path: 'PerfilUsuario', component:ProfileuserComponent},
  {path: 'ListadoUsuarios', component:ListusersComponent},
  {path: 'Login', component:LoginuserComponent },
  {path: '', component: HomeComponent },
  {path: 'EditarPerfil', component: EditprofileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


