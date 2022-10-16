import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModel } from '../../create/create-cliente/cliente.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {
  
  //utilizamos o formgroup em conjunto com o buscar por id para preenchimento automático do input com os dados do cliente. Posteriormente utilizamos para atualizar os dados
  //adicionamos o ID, pois o input necessita do id no body
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
    id: ["", []]
    
  })
  

  constructor(private clienteService: ClientesService, private router: ActivatedRoute, private fb: FormBuilder, private route: Router) { }

  //Estamos buscando o cliente por id, pegando o parametro da url e utilizando o resultado para preencher o formulário automaticamente
  ngOnInit(): void {
    console.log(this.formCliente.value)
    this.clienteService.bucarClientesPorId(this.router.snapshot.params['id']).subscribe(result => {
    
      this.formCliente = this.fb.group({
        nome: [result.nome, [
          Validators.required,
          // Validators.maxLength(30)
        ]],
        cpf: [result.cpf, [
          Validators.required,
          // Validators.maxLength(14)
        ]], 
        logradouro: [result.logradouro, [
          Validators.required,
          // Validators.maxLength(80)
        ]],
        numero: [result.numero, [
          Validators.required,
          // Validators.maxLength(10)
        ]],
        bairro: [result.bairro, [
          Validators.required,
          // Validators.maxLength(20)
        ]],
        cidade: [result.cidade, [
          Validators.required,
          // Validators.maxLength(20)
        ]],
        estado: [result.estado, [
          Validators.required,
          // Validators.maxLength(2)
        ]],
        email: [result.email, [
          Validators.required,
          Validators.email,
          // Validators.maxLength(20)
        ]],
        telefone: [result.telefone, [
          Validators.required,
          // Validators.maxLength(20)
        ]],
        id: [result.id]
        
      })
      console.log(result)
        
      })
    };
     
    atualizarCliente() {
      console.log(this.formCliente.value)
      this.clienteService.atualizarCliente(this.formCliente.value).subscribe(cliente => {
        //mensagem de confimação
        console.log("Cliente Atualizado com Sucesso: ");
        alert("Cliente Atualizado com Sucesso: ");
        this.route.navigate([`info-cliente/${cliente.id}`]);
        
        
        
      }, err => {
        console.log("Erro ao atualizar cliente", err)

      })

    }
    
    
  }


