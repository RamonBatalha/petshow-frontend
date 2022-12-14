import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProdutosService } from 'src/app/services/produtos.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogCategoriaComponent } from 'src/app/elementos/dialog-categoria/dialog-categoria.component';


@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {

  faplus = faPlus;
   
  formProduto = this.fb.group({
    nome: ["", [
      Validators.required,
      // Validators.maxLength(30)
    ]],
    status: [1, [
      Validators.required,
      // Validators.maxLength(14)
    ]],
    estoque: [, [
      Validators.required,
      Validators.min(0),
      
      // Validators.maxLength(80)
    ]],
    valorcompra: [, [
      Validators.required,
      Validators.min(0),
      // Validators.maxLength(10)
    ]],
    valorvenda: [, [
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


  constructor(private fb: FormBuilder, private produtosService: ProdutosService, public dialog: MatDialog) { }

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
   
  adicionarProduto() {
      console.log(this.formProduto.value)

      this.produtosService.adicionarProduto(this.formProduto.value).subscribe(produto => {
        //mensagem de confimação
        console.log("Produto Cadastrado com Sucesso: ");
        alert("Produto Cadastrado com Sucesso: ");
        //limpando campo de input
        this.formProduto.reset();
        //redirecionar para página do cliente
        // this.route.navigate([`info-cliente/${pet.cliente.id}`]); 
        
      }, err => {
        console.log("Erro ao cadastrar Produto", err)
   
      })
  }

    openDialog() {
         this.dialog.open(DialogCategoriaComponent)
    }
}
