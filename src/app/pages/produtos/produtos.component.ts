import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
   
  produtos: Array<any> = new Array();
   
  //quais colunas teremos na nossa tabela
  displayedColumns: string[] = ['id', 'nome', 'val.compra', 'val.venda','estoque','cat'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.listarProdutos().subscribe(produtos => {
      console.log(produtos)
      //atribuindo o valor ao array
      this.produtos = produtos;


      //setando configurações da tabela
      this.dataSource = new MatTableDataSource(produtos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, err => {
      console.log('Erro ao listar os alunos', err)
    })
  }
  
  //import da função de fltragem
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
