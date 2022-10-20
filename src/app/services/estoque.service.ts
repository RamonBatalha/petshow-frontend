import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  // recebe a url de requisição e o objeto que vai ser passado
  entradaEstoque(entrada: unknown): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/entradaestoque", entrada);
   }

  // recebe a url de requisição e o objeto que vai ser passado
  saidaEstoque(saida: unknown): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/saidaestoque", saida);
   }

}
