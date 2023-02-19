import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './agregar/agregar-cliente.component';
import { ListarClienteComponent } from './listar/listar-cliente.component';

const routes: Routes = [
  { path: "agregar", component:  AgregarClienteComponent},
  { path: "listar", component:  ListarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

