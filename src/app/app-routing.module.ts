import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  { path:'',component:LoginComponent },
  { path:'principal',component:PrincipalComponent },
  { path:'registrar',component:RegistrarComponent },
  { path:'inicio',component:InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
