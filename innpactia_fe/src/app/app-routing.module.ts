import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "cliente", loadChildren: () => import("./pages/clientes/clientes.module").then(m => m.ClienteModule) },
  { path: "reparaciones", loadChildren: () => import("./pages/reparaciones/reparaciones.module").then(m => m.ReparacionesModule) },
  { path: "telefono", loadChildren: () => import("./pages/telefonos/telefonos.module").then(m => m.TelefonosModule) },
  { path: "login", loadChildren: () => import("./component/login/login.module").then(m => m.LoginModule)  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'errores/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

