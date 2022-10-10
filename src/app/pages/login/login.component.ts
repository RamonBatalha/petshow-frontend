import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   email: string = "";
   password: string = "";

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
   
  login(){
    //  console.log("email: ", this.email);
    //  console.log("password: ", this.password);
     
     this.auth.loginUser(this.email, this.password)
     .then((result) => {
       if (result == null){
           console.log("Usuario logado com sucesso")
       }

       else if (result.isValid == false) {
          console.log("Erro no Login", result)
       }
     })

  }
}
