import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 

  constructor(private auth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  logout() {
        this.auth.signOut().then(() => {
          console.log("Logout realizado com sucesso")
        }).catch(() => {
          console.log("Erro ao realizar o logout")
        });
        this.router.navigate(["login"]);

  }

}
