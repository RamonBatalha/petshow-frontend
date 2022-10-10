import { Injectable, resolveForwardRef } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   
  constructor(private router: Router, private auth: AngularFireAuth) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       return new Promise((resolve, reject) => {
        this.auth.onAuthStateChanged((user) => {
          if(user){
            resolve(true)
          } else {
             console.log("Auth Guard: usuário não logado, acesso negado");
             this.router.navigate(["login"]);
             resolve(false)
          }
        })
       })
  }
  
}
