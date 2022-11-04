import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

   //Exibir todos os clientes
   listarServicos() : Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/servicos")
  }

  //Exibir todos os clientes
  bucarServicoPorId(id: number | null) : Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/servicos/${id}`)
  }
  
  // recebe a url de requisição e o objeto que vai ser passado
  adicionarServico(servico: unknown): Observable<any> {
   return this.http.post("http://localhost:8080/api/v1/servicos", servico);
  }

  //atualizar servico, recebe o servico
  atualizarServico(servico: unknown): Observable<any> {
   return this.http.post("http://localhost:8080/api/v1/servicos", servico);
  }

  // deletar servico
   removerServico(id: string) {
   return this.http.delete("http://localhost:8080/api/v1/servicos/".concat(id));
  }
  
}
