import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModel } from './cliente.model';

@Component({
  selector: 'app-informacao-clientes',
  templateUrl: './informacao-clientes.component.html',
  styleUrls: ['./informacao-clientes.component.css']
})
export class InformacaoClientesComponent implements OnInit {
   
  id: number | null = null;
  nome: string = "";
  cpf: string = "";
  endereco: string = "";
  email: string = "";
  telefone: string = "";
  

  constructor(private route: ActivatedRoute, private router: Router, private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"))
    })

    this.bucarClientesPorId(this.id);
  }

  bucarClientesPorId(id: number | null) {
    this.clientesService.bucarClientesPorId(id).subscribe(clientes => {
      console.log(clientes)
      console.log("Busca ok")
      this.nome = clientes.nome;
      this.cpf = clientes.cpf;
      this.endereco = clientes.endereco;
      this.email = clientes.email;
      this.telefone = clientes.telefone;
    }, err => {
      console.log('Erro ao listar os alunos', err)
    })
  }

}
