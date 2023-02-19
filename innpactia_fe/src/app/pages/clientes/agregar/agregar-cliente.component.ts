import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css'],
})

export class AgregarClienteComponent {

  nombre: string = '';
  apellido: string = '';
  cliente: Cliente = {
    nombre: '',
    apellido: '',
  };
  loginError: boolean = false;
  dataOK: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.cliente = {
        nombre: this.nombre,
        apellido: this.apellido,
    };
    this.clienteService.setCliente(this.cliente).subscribe(
      (data: any) => {
        this.dataOK = true;
      },
      (error: any) => {
        this.loginError = true;
      }
    );
  }
  
}
