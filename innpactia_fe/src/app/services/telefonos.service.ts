import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Telefono } from "../interfaces/telefono.interface";

@Injectable({
    providedIn: "root"
})

export class TelefonoService{
    private apiURL = "http://localhost:8080/api/telefonos/"
    constructor(private http: HttpClient) {}

    getTelefono_Cliente(id: any):Observable<Telefono[]>{
        return this.http.get<Telefono[]>(this.apiURL + "telefonos_clientes/" + id);
    }

    setTelefono(telefono : Telefono){
        const httOption ={
            headers : new HttpHeaders({
                "content-Type": "application/json"
            })
        }
        return this.http.post(this.apiURL + "create", telefono, httOption);
    }
}