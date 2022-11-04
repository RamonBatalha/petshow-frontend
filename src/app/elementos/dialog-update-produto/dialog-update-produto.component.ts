import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from 'src/app/services/produtos.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogCategoriaComponent } from 'src/app/elementos/dialog-categoria/dialog-categoria.component';

@Component({
  selector: 'app-dialog-update-produto',
  templateUrl: './dialog-update-produto.component.html',
  styleUrls: ['./dialog-update-produto.component.css']
})
export class DialogUpdateProdutoComponent implements OnInit {

  faplus = faPlus;

  formProduto = this.fb.group({
    id: [this.produtoData.id, [
      Validators.required,
      // Validators.maxLength(30)
    ]],
    nome: [this.produtoData.nome, [
      Validators.required,
      // Validators.maxLength(30)
    ]],
    status: [1, [
      Validators.required,
      // Validators.maxLength(14)
    ]],
    estoque: [this.produtoData.estoque, [
      Validators.required,
      Validators.min(0),
      
      // Validators.maxLength(80)
    ]],
    valorcompra: [this.produtoData.valorcompra, [
      Validators.required,
      Validators.min(0),
      // Validators.maxLength(10)
    ]],
    valorvenda: [this.produtoData.valorvenda, [
      Validators.required,
      Validators.min(0),
      // Validators.maxLength(20)
    ]],
    categoria: this.fb.group({
      id: [, [
      Validators.required,
      // Validators.maxLength(20)
    ]],  }) 
    
    
  })

  //recebe o retorno da requisição get
  categorias: Array<any> = new Array();

  constructor(private fb: FormBuilder, private produtosService: ProdutosService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public produtoData: any) { }

  ngOnInit(): void {

       //requisição get para exibição de categorias já adicionadas
       this.produtosService.listarCategorias().subscribe(categorias => {
        console.log(categorias)
        //atribuindo o valor ao array
        this.categorias = categorias;
  
      }, err => {
        console.log('Erro ao listar os alunos', err)
      })
    ;
  }
  
  //Função de atualização de produtos
  updateProduto() {
       console.log(this.formProduto.value)
      this.produtosService.atualizarProduto(this.formProduto.value).subscribe(cliente => {
        //mensagem de confimação
        console.log("Produto Atualizado com Sucesso: ");
        alert("Produto Atualizado com Sucesso: ");
        // this.route.navigate([`info-cliente/${cliente.id}`]);
        
      }, err => {
        console.log("Erro ao atualizar Produto", err)

      })
  }
   
  //renderização de dialog de atualização de produtos
  openDialog() {
    this.dialog.open(DialogCategoriaComponent)
  }

}
