import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  //Exibir todos os produtos
  listarProdutos() : Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/produtos")
  }

  //Exibir todos os produtos
  bucarProdutoPorId(id: number | null) : Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/produtos/${id}`)
  }
  
  // recebe a url de requisição e o objeto que vai ser passado
  adicionarProduto(produto: any): Observable<any> {
   return this.http.post("http://localhost:8080/api/v1/produtos", produto);
  }

  //método para atualizar produto
  atualizarProduto(produto: any): Observable<any> {
   return this.http.post("http://localhost:8080/api/v1/produtos", produto);
  }

  // recebe a url de requisição e o objeto que vai ser passado
   removerProduto(id: string) {
   return this.http.delete("http://localhost:8080/api/v1/produtos/".concat(id));
  }
}
