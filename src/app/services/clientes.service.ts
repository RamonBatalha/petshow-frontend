import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../pages/create/create-cliente/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http: HttpClient) { }
  
  //Exibir todos os clientes
  listarClientes() : Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/cliente")
  }

  //Exibir todos os clientes
  bucarClientesPorId(id: number | null) : Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/cliente/${id}`)
  }
  
  // recebe a url de requisição e o objeto que vai ser passado
  adicionarCliente(cliente: any): Observable<any> {
   return this.http.post("http://localhost:8080/api/v1/cliente", cliente);
  }

  //
  atualizarCliente(cliente: any): Observable<any> {
   return this.http.post("http://localhost:8080/api/v1/cliente", cliente);
  }

  // recebe a url de requisição e o objeto que vai ser passado
   removerCliente(id: string) {
   return this.http.delete("http://localhost:8080/api/v1/cliente/".concat(id));
  }
}
