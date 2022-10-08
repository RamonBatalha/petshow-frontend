import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  listarPets() : Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/pet")
  }

   bucarPetPorId(id: number | null) : Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/pet/${id}`)
  }
  
  adicionarPet(cliente: any): Observable<any> {
   return this.http.post("http://localhost:8080/api/v1/pet", cliente);
  }

  atualizarPet(cliente: any): Observable<any> {
   return this.http.post("http://localhost:8080/api/v1/pet", cliente);
  }

   removerPet(id: string) {
   return this.http.delete("http://localhost:8080/api/v1/pet/".concat(id));
  }
}
