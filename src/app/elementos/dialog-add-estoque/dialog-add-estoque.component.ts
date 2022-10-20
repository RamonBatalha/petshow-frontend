import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { EstoqueService } from 'src/app/services/estoque.service';


@Component({
  selector: 'app-dialog-add-estoque',
  templateUrl: './dialog-add-estoque.component.html',
  styleUrls: ['./dialog-add-estoque.component.css']
})
export class DialogAddEstoqueComponent implements OnInit {

  qtd: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public produtoData: any, private service: EstoqueService, private router: Router) { }

  ngOnInit(): void {
  }
   
  entradaEstoque(): void { 

    if (this.qtd < 0 ){
       alert("Não é possível adicionar valores negativos")
    } else {

      console.log(this.produtoData);
      console.log(this.qtd);

      this.service.entradaEstoque({
        "produto": {"id": this.produtoData.id},
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
        console.log("Erro ao cadastrar entrada", err)
        alert("Erro ao cadastrar entrada")
  
      })
    }
  }
}
