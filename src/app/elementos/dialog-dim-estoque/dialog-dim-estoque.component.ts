import { Component, Inject, OnInit } from '@angular/core';
import { EstoqueService } from 'src/app/services/estoque.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-dim-estoque',
  templateUrl: './dialog-dim-estoque.component.html',
  styleUrls: ['./dialog-dim-estoque.component.css']
})
export class DialogDimEstoqueComponent implements OnInit {
   
  //input de valor de saída
  qtd: number = 0;

  constructor(private service: EstoqueService, @Inject(MAT_DIALOG_DATA) public produtoData: any, private router: Router) { }

  ngOnInit(): void {
  }

  saidaEstoque(): void {

    if (this.qtd < 0 || this.qtd > this.produtoData.estoque) {
      alert("Não é possível adicionar valores negativos ou maiores que o estoque atual")
    } else {

      console.log(this.produtoData);
      console.log(this.qtd);

      this.service.saidaEstoque({
        "produto": { "id": this.produtoData.id },
        "valor": this.qtd,
        "data": Date.now()
      }).subscribe(entrada => {
        //mensagem de confimação
        console.log("Estoque atualizado com Sucesso: ");
        alert("Estoque atualizado com Sucesso: ");

        //limpando campo de input
        this.qtd = 0;

        //Atualiza a página após atualização do estoque
        timer(1000).subscribe(x => {
          this.router.navigateByUrl('/Refresh', { skipLocationChange: true }).then(() =>
            this.router.navigate(["produtos"]));
        });

      }, err => {
        console.log("Erro ao cadastrar saída", err)
        alert("Erro ao cadastrar saída")

      })
    }
  }

}
