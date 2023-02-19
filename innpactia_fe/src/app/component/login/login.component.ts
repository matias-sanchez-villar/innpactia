import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
    
  username: string = '';
  password: string = '';
  usuario: Usuario = {
    usuario: '',
    clave: '',
  };
  loginError: boolean = false;

  constructor(private authService: UsuarioService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/cliente/listar']);
    }
  }

  onSubmit() {
    this.usuario = {
        usuario: this.username,
        clave: this.password,
    };
    this.authService.getLogin(this.usuario).subscribe(
      (data: Usuario) => {
        localStorage.setItem('token', data.usuario);
        this.router.navigate(['/cliente/listar']);
      },
      (error: any) => {
        this.loginError = true;
      }
    );
  }
}
