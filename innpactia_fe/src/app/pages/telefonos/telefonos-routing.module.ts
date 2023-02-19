import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTelefonoComponent } from './agregar/agregar-telefono.component';
import { ListarTelefonoComponent } from './listar/listar-telefono.component';

const routes: Routes = [
  { path: "agregar", component:  AgregarTelefonoComponent},
  { path: "listar", component:  ListarTelefonoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelefonoRoutingModule { }

