import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeneralModule } from '../general/general.module';
import { AgregarReparacionesComponent } from './agregar/agregar-reparaciones.component';
import { ListarReparacionesComponent } from './listar/listar-reparaciones.component';
import { ReparacionRoutingModule } from './reparaciones-routing.module';
import { ReparacionesTelefonoComponent } from './reparaciones_telefono/reparaciones-telefono.component';

@NgModule({
  declarations: [
    AgregarReparacionesComponent,
    ListarReparacionesComponent,
    ReparacionesTelefonoComponent,
  ],
  imports: [
    CommonModule,
    ReparacionRoutingModule,
    GeneralModule,
    FormsModule
  ]
})
export class ReparacionesModule { }