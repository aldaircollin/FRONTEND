import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  //Esta URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/Proveedor";
  constructor(private httpClient : HttpClient) { }
  //este metodo nos sirve para obtener los empleados
  ListarProveedores():Observable<Proveedor[]>{
    return this.httpClient.get<Proveedor[]>(`${this.baseURL+"/Listar"}`);
  }

  //este metodo nos sirve para registrar un empleado
  registrarProveedor(proveedor:Proveedor) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/Guardar"}`,proveedor);
  }

  //este metodo sirve para actualizar el empleado
  actualizarProveedor(id:number,proveedor:Proveedor) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/Actualizar"}/${id}`,proveedor);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerProveedorPorId(id:number):Observable<Proveedor>{
    return this.httpClient.get<Proveedor>(`${this.baseURL+"/BuscarPorId"}/${id}`);
  }

  eliminarProveedor(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/Eliminar"}/${id}`);
}
}
