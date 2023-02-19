import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reparacion } from 'src/app/interfaces/reparacion.interface';
import { ReparacionesService } from 'src/app/services/reparaciones.service';

@Component({
  selector: 'app-listar-reparaciones',
  templateUrl: './listar-reparaciones.component.html',
  styleUrls: ['./listar-reparaciones.component.css'],
})

export class ListarReparacionesComponent {

  reparaciones: Reparacion[] = [];
  Error: boolean = false;

  constructor(private reparacionesService: ReparacionesService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
    }
    this.client();
    this.service();
  }

  client(){
    const data = JSON.parse(localStorage.getItem("cliente") || '{}');
    if(Object.entries(data).length) localStorage.removeItem("cliente");
  }

  service() {
    this.reparacionesService.getList().subscribe(
      (data: Reparacion[]) => {
        this.reparaciones = data;
      },
      (error: any) => {
        this.Error = true;
      }
    );
  }

}
