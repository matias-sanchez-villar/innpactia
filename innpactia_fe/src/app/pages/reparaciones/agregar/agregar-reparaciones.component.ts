import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reparacion } from 'src/app/interfaces/reparacion.interface';
import { ReparacionesService } from 'src/app/services/reparaciones.service';

@Component({
  selector: 'app-agregar-reparaciones',
  templateUrl: './agregar-reparaciones.component.html',
  styleUrls: ['./agregar-reparaciones.component.css'],
})

export class AgregarReparacionesComponent {

  idCliente: number = 1
  idTelefono: string = ""
  titulo: string = ""
  descripcion: string = ""
  fecha:Date = new Date()
  cliente: Reparacion = {
     idCliente: 1,
     idTelefono: "",
     titulo: "",
     descripcion: "",
     fecha: new Date(),
  };
  loginError: boolean = false;
  dataOK: boolean = false;

  constructor(private reparacionesService: ReparacionesService, private router: Router, private activeRoruter: ActivatedRoute) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
    }
    this.data();
  }

  data(){
    const data = JSON.parse(localStorage.getItem("cliente") || '{}');
    let telefono = this.activeRoruter.snapshot.paramMap.get("numero");
    console.log(telefono, data)
    if(!Object.entries(data).length || !telefono) this.router.navigate(["/"]);
    this.idCliente = data.cliente.id;
    this.idTelefono = "" + telefono;
  }

  onSubmit() {
    this.cliente = {
      idCliente: this.idCliente,
      idTelefono: this.idTelefono,
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: this.fecha,
    };
    this.reparacionesService.setReparaciones_Telefono(this.cliente).subscribe(
      (data: any) => {
        this.dataOK = true;
      },
      (error: any) => {
        this.loginError = true;
      }
    );
  }

}
