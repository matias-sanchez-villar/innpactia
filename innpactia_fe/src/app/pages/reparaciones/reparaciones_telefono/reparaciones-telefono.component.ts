import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Reparacion } from 'src/app/interfaces/reparacion.interface';
import { ReparacionesService } from 'src/app/services/reparaciones.service';

@Component({
  selector: 'app-reparaciones-telefono',
  templateUrl: './reparaciones-telefono.component.html',
  styleUrls: ['./reparaciones-telefono.component.css'],
})

export class ReparacionesTelefonoComponent {

  cliente: Cliente = {
    id: 1,
    nombre: "",
    apellido: ""
  };
  reparaciones: Reparacion[] = [];
  telefono: any = 1;
  Error: boolean = false;

  constructor(private reparacionesService: ReparacionesService, private router: Router, private activeRoruter: ActivatedRoute) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log(token, !token)
      this.router.navigate(['/']);
    }
    this.data();
  }

  data(){
    const data = JSON.parse(localStorage.getItem("cliente") || '{}');
    let telefono = this.activeRoruter.snapshot.paramMap.get("numero");
    if(!Object.entries(data).length || !telefono) this.router.navigate(["/"]);
    this.cliente = {
      id: data.cliente.id,
      nombre: data.cliente.nombre,
      apellido: data.cliente.apellido
    };
    this.telefono = telefono;
  }

  service() {
    this.reparacionesService.getReparaciones_Telefono(this.telefono).subscribe(
      (data: Reparacion[]) => {
        this.reparaciones = data;
      },
      (error: any) => {
        this.Error = true;
      }
    );
  }

}
