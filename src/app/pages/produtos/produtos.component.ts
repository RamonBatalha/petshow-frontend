import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { faPlus, faMinus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddEstoqueComponent } from 'src/app/elementos/dialog-add-estoque/dialog-add-estoque.component';
import { DialogDimEstoqueComponent } from 'src/app/elementos/dialog-dim-estoque/dialog-dim-estoque.component';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  //icones 
  faplus = faPlus;
  faminus = faMinus;
  fatrash = faTrash;
  fapen = faPen;
  
   
  //quais colunas teremos na nossa tabela
  displayedColumns: string[] = ['id', 'nome', 'val.compra', 'val.venda','estoque', 'cat', 'editar'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private produtoService: ProdutosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.listarProdutos().subscribe(produtos => {
      console.log(produtos)
      //atribuindo o valor ao array
      // this.produtos = produtos;


      //setando configurações da tabela
      this.dataSource = new MatTableDataSource(produtos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, err => {
      console.log('Erro ao listar os alunos', err)
    })
  }
  
  //import da função de filtragem
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  entradaEstoque(row: any) {
    console.log('Entrada de estoque ' + row.nome);
    //chamando e repassando dados para o dialog
    this.dialog.open(DialogAddEstoqueComponent, {
      data: row
    });
  }

  saidaEstoque(row: any){
    console.log('Saida de estoque ' + row.id);
    //chamando e repassando dados para o dialog
    this.dialog.open(DialogDimEstoqueComponent, {
      data: row
    });
  }

 
}
