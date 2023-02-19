import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css'],
})

export class ListarClienteComponent {

  cliente: Cliente[] = [];
  Error: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router) {}

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
    this.clienteService.getList().subscribe(
      (data: Cliente[]) => {
        console.log(data)
        this.cliente = data;
      },
      (error: any) => {
        this.Error = true;
      }
    );
  }

  verTelefonos(cliente : Cliente){
    localStorage.setItem("cliente", JSON.stringify({cliente}))
    this.router.navigate(["/telefono/listar"])
  }

  agregarTelefonos(cliente : Cliente){
    localStorage.setItem("cliente", JSON.stringify({cliente}))
    this.router.navigate(["/telefono/agregar"])
  }

}
