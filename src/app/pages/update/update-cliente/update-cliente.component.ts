import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModel } from '../../create/create-cliente/cliente.model';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {
  
  //utilizamos o formgroup em conjunto com o formcontrol para preenchimento automático do input com os dados do cliente
  updateCliente = new FormGroup({
    nome: new FormControl,
    cpf: new FormControl,
    endereco: new FormControl,
    telefone: new FormControl,
    email: new FormControl
  })

  constructor(private clienteService: ClientesService, private router: ActivatedRoute) { }

  //Estamos buscando o cliente por id, pegando o parametro da url e utilizando o resultado para preencher o formulário automaticamente
  ngOnInit(): void {
    console.log(this.clienteService.bucarClientesPorId(this.router.snapshot.params['id']).subscribe(result => {
      this.updateCliente = new FormGroup({
        nome: new FormControl(result['nome']),
        cpf: new FormControl(result['cpf']),
        endereco: new FormControl(result['endereco']),
        telefone: new FormControl(result['telefone']),
        email: new FormControl(result['email'])
      })
    }));
    
    
  }

}
