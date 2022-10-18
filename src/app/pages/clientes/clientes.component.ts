import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  //Icones do FontAwesome
  faTrash = faTrash;
  faPen = faPen;

  //recebe o retorno da requisição get
  clientes: Array<any> = new Array();

  //quais colunas teremos na nossa tabela
  displayedColumns: string[] = ['id','nome', 'informações', 'editar','deletar'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //importando o cliente service. Necessita importar no app module também e adicionar nos providers
  constructor(private clientesService: ClientesService, private router: Router) { }

  //setado para o método ser executado na inicialização da página
  ngOnInit(): void {
    this.listarClientes();
  }


  listarClientes() {
    this.clientesService.listarClientes().subscribe(clientes => {
      console.log(clientes)
      //atribuindo o valor ao array
      this.clientes = clientes;

      //setando configurações da tabela
      this.dataSource = new MatTableDataSource(clientes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, err => {
      console.log('Erro ao listar os alunos', err)
    })
  }

  irPaginaAdicionar() {
    this.router.navigate(["create-cliente"]);
  }

  irPaginaCliente(id: string) {
    this.router.navigate([`info-cliente/${id}`]);
  }

  removerCliente(id: string) {
    console.log("remover cliente" + id);

    if (window.confirm('Você tem certeza que deseja deletar o cliente?')) {

      this.clientesService.removerCliente(id).subscribe(clientes => {
        //atualizar lista após deletar
        this.listarClientes()

      }, err => {
        console.log('Erro ao Deletar o cliente', err)
      })
    }

  }

   //import da função de filtragem
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
