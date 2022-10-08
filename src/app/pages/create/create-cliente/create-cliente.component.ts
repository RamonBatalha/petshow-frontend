
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModel } from './cliente.model';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
    
  formCliente = this.fb.group({
    nome: ["", [
      Validators.required,
      // Validators.maxLength(5)
    ]],
    cpf: ["", [
      Validators.required,
      // Validators.maxLength(30)
    ]], 
    endereco: ["", [
      Validators.required,
      // Validators.maxLength(80)
    ]],
    email: ["", [
      Validators.required,
      Validators.email,
      // Validators.maxLength(50)
    ]],
    telefone: ["", [
      Validators.required,
      // Validators.maxLength(50)
    ]],
    
  })

  constructor(private clienteService: ClientesService, private fb: FormBuilder) { }
  
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
