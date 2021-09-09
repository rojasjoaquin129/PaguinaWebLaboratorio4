import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'inicio',component: HomeComponent},
  {path:'ingreso',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'quien-soy',component:QuienSoyComponent},
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'contacto',component:ContactoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
