import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

   //recebe o retorno da requisição get
   servicos: Array<any> = new Array();

  constructor(private servicoService: ServicosService) { }

  ngOnInit(): void {
    this.listarServicos();
  }

  listarServicos() {
    this.servicoService.listarServicos().subscribe(servicos => {
      console.log(servicos)
      //atribuindo o valor ao array
      this.servicos = servicos;

      //setando configurações da tabela
      // this.dataSource = new MatTableDataSource(servicos);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }, err => {
      console.log('Erro ao listar os alunos', err)
    })
  }

}
