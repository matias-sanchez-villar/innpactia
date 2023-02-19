import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../interfaces/cliente.interface";

@Injectable({
    providedIn: "root"
})

export class ClienteService{
    private apiURL = "http://localhost:8080/api/cliente/"
    constructor(private http: HttpClient) {}

    getList():Observable<Cliente[]>{
        return this.http.get<Cliente[]>(this.apiURL + "all");
    }

    setCliente(cliente: Cliente){
        const httOption ={
            headers : new HttpHeaders({
                "content-Type": "application/json"
            })
        }
        return this.http.post(this.apiURL + "create", cliente, httOption);
    }
}