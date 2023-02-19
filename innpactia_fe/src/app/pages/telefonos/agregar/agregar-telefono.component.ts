import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Telefono } from 'src/app/interfaces/telefono.interface';
import { TelefonoService } from 'src/app/services/telefonos.service';

@Component({
  selector: 'app-agregar-telefono',
  templateUrl: './agregar-telefono.component.html',
  styleUrls: ['./agregar-telefono.component.css'],
})

export class AgregarTelefonoComponent {

  idCliente: number = 1;
  numero: string = "";
  loginError: boolean = false;
  dataOK: boolean = false;
  telefono: Telefono = {
    idCliente: 2,
    numero: " "
  };
  
  constructor(private telefonoService: TelefonoService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
    }
  }

  data(){
    const data = JSON.parse(localStorage.getItem("cliente") || '{}');
    if(!Object.entries(data).length) this.router.navigate(["/"]);
    this.idCliente = data.cliente.id;
  }

  onSubmit() {
    this.telefono = {
      idCliente: this.idCliente,
      numero: this.numero
    };
    this.telefonoService.setTelefono(this.telefono).subscribe(
      (data: any) => {
        this.dataOK = true;
      },
      (error: any) => {
        this.loginError = true;
      }
    )}
    
}
