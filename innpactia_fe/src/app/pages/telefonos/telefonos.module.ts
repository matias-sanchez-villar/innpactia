import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeneralModule } from '../general/general.module';
import { AgregarTelefonoComponent } from './agregar/agregar-telefono.component';
import { ListarTelefonoComponent } from './listar/listar-telefono.component';
import { TelefonoRoutingModule } from './telefonos-routing.module';

@NgModule({
  declarations: [
    AgregarTelefonoComponent,
    ListarTelefonoComponent,
  ],
  imports: [
    CommonModule,
    TelefonoRoutingModule,
    GeneralModule,
    FormsModule
  ]
})
export class TelefonosModule { }