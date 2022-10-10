import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogedIn: boolean | undefined; 
  

  constructor(private auth: AngularFireAuth, private router: Router) { 

      this.userLogedIn = false;

      this.auth.onAuthStateChanged((user) => {
        if (user) {
          this.userLogedIn = true; 
        } else {
          this.userLogedIn = false;
        }
      })
  }

    loginUser(email: string, password: string): Promise<any> {
           
        return this.auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          console.log("Usuário logado com sucesso");
          console.log(result);
          this.router.navigate(["dashboard"]);
          

        }).catch((error) => {
          console.log("Erro ao tentar logar")
          console.log('error code: ' + error.code)
          console.log('error: ' + error)
        })
    }
}
