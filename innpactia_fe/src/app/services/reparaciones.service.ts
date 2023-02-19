import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Reparacion } from "../interfaces/reparacion.interface";

@Injectable({
    providedIn: "root"
})

export class ReparacionesService{
    private apiURL = "http://localhost:8080/api/reparaciones/"
    constructor(private http: HttpClient) {}

    getList():Observable<Reparacion[]>{
        return this.http.get<Reparacion[]>(this.apiURL + "all");
    }

    getReparaciones_Telefono(telefono : number):Observable<Reparacion[]>{
        return this.http.get<Reparacion[]>(this.apiURL + "reparaciones_telefono/" + telefono);
    }

    setReparaciones_Telefono(reparacion : Reparacion){
        const httOption ={
            headers : new HttpHeaders({
                "content-Type": "application/json"
            })
        }
        return this.http.post(this.apiURL + "create", reparacion, httOption);
    }

}