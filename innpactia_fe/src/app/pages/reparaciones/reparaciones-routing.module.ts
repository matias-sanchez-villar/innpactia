import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarReparacionesComponent } from './agregar/agregar-reparaciones.component';
import { ListarReparacionesComponent } from './listar/listar-reparaciones.component';
import { ReparacionesTelefonoComponent } from './reparaciones_telefono/reparaciones-telefono.component';

const routes: Routes = [
  { path: "agregar/:numero", component:  AgregarReparacionesComponent},
  { path: "listar", component:  ListarReparacionesComponent},
  { path: "reparacionestelefono/:numero", component:  ReparacionesTelefonoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReparacionRoutingModule { }

