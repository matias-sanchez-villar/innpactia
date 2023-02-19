import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Telefono } from 'src/app/interfaces/telefono.interface';
import { TelefonoService } from 'src/app/services/telefonos.service';

@Component({
  selector: 'app-listar-telefono',
  templateUrl: './listar-telefono.component.html',
  styleUrls: ['./listar-telefono.component.css'],
})

export class ListarTelefonoComponent {

  cliente: Cliente = {
    id: 1,
    nombre: "",
    apellido: ""
  };
  telefono: Telefono[] = [];
  Error: boolean = false;

  constructor(private telefonoService: TelefonoService,private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
    }
    this.client()
    this.service()
  }

  client(){
    const data = JSON.parse(localStorage.getItem("cliente") || '{}');
    if(!Object.entries(data).length) this.router.navigate(["/"]);
    this.cliente = {
      id: data.cliente.id,
      nombre: data.cliente.nombre,
      apellido: data.cliente.apellido
    };
  }

  service() {
    this.telefonoService.getTelefono_Cliente(this.cliente.id).subscribe(
      (data: Telefono[]) => {
        this.telefono = data;
      },
      (error: any) => {
        this.Error = true;
      }
    );
  }

  verReparaciones(numero: string){
    this.router.navigate(["reparaciones/reparacionestelefono/", numero])
  }

  agregarReparacione(numero: string){
    this.router.navigate(["reparaciones/agregar/", numero])
  }

}
