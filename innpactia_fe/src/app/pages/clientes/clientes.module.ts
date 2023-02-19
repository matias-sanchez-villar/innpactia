import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeneralModule } from '../general/general.module';
import { AgregarClienteComponent } from './agregar/agregar-cliente.component';
import { ClienteRoutingModule } from './clientes-routing.module';
import { ListarClienteComponent } from './listar/listar-cliente.component';

@NgModule({
  declarations: [
    AgregarClienteComponent,
    ListarClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    GeneralModule,
    FormsModule
  ]
})
export class ClienteModule { }
