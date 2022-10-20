
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
    
  formCliente = this.fb.group({
    nome: ["", [
      Validators.required,
      // Validators.maxLength(30)
    ]],
    cpf: ["", [
      Validators.required,
      // Validators.maxLength(14)
    ]],
    logradouro: ["", [
      Validators.required,
      // Validators.maxLength(80)
    ]],
    numero: ["", [
      Validators.required,
      // Validators.maxLength(10)
    ]],
    bairro: ["", [
      Validators.required,
      // Validators.maxLength(20)
    ]],
    cidade: ["", [
      Validators.required,
      // Validators.maxLength(20)
    ]],
    estado: ["", [
      Validators.required,
      // Validators.maxLength(2)
    ]],
    email: ["", [
      Validators.required,
      Validators.email,
      // Validators.maxLength(20)
    ]],
    telefone: ["", [
      Validators.required,
      // Validators.maxLength(20)
    ]],
    
  })

  constructor(private clienteService: ClientesService, private fb: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
  }

   adicionarCliente() {
      console.log(this.formCliente.value);
      this.clienteService.adicionarCliente(this.formCliente.value).subscribe(cliente => {
        //mensagem de confimação
        console.log("Cliente Criado com Sucesso: ");
        alert("Cliente Criado com Sucesso: ");
        //limpando campo de input
        this.formCliente.reset();
        //limpar campo de input
        
        
      }, err => {
        console.log("Erro ao cadastrar cliente", err)

      })
  }

}
