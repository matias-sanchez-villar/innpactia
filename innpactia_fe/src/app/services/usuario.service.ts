import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../interfaces/usuario.interface";

@Injectable({
    providedIn: "root"
})

export class UsuarioService{
    private apiURL = "http://localhost:8080/api/usuario/login"
    constructor(private http: HttpClient) {}

    getLogin(usuario: Usuario): Observable<any> {
        const headers = new HttpHeaders().set("content-Type", "application/json");
        const params = {
          usuario: usuario.usuario,
          clave: usuario.clave
        };
        return this.http.post(this.apiURL, params, { headers }); // modifcar post en back
      }
}