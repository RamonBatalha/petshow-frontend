import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';




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

}
