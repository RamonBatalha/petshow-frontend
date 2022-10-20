import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-dialog-categoria',
  templateUrl: './dialog-categoria.component.html',
  styleUrls: ['./dialog-categoria.component.css']
})
export class DialogCategoriaComponent implements OnInit {


  name: string | undefined;

  constructor( private categoriaService: ProdutosService, private router: Router ) { }

  ngOnInit(): void {
  }

  adicionarCategoria() {

    console.log(this.name)
    // // console.log(this.formCliente.value);
    this.categoriaService.adicionarCategoria({nomecategoria:this.name}).subscribe(categoria => {
      //mensagem de confimação
      console.log("Categoria adicionada com Sucesso: ");
      alert("Categoria adicionada com Sucesso: ");
      //limpando campo de input
      // this.formCliente.reset();
      //limpar campo de input

      //Atualiza a página após inserção da categoria
      timer(1000).subscribe(x => {
        this.router.navigateByUrl('/Refresh', { skipLocationChange: true }).then(() =>
             this.router.navigate(["create-produto"]));
        });
      
    }, err => {
      console.log("Erro ao cadastrar cliente", err)

    })
}

}
