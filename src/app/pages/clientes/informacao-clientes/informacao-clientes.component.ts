import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { PetService } from 'src/app/services/pet.service';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-informacao-clientes',
  templateUrl: './informacao-clientes.component.html',
  styleUrls: ['./informacao-clientes.component.css']
})
export class InformacaoClientesComponent implements OnInit {


  //Icones do FontAwesome
  faTrash = faTrash;
  faPen = faPen;

  //Array com lista de pets vinculados
  pets: Array<any> = new Array();

  // nomepet: string = "";
   
  id: number | null = null;
  nome: string = "";
  cpf: string = "";
  logradouro: string = "";
  numero: string = "";
  bairro: string = "";
  cidade: string = "";
  estado: string = "";
  email: string = "";
  telefone: string = "";
  

  constructor(private route: ActivatedRoute, private router: Router, private clientesService: ClientesService, private petService: PetService) { }
  
  //na renderização da página setamos o id pelo parâmetro da URL
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"))
    })

    this.buscarClientesPorId(this.id);

  }

  buscarClientesPorId(id: number | null) {
    
    this.clientesService.bucarClientesPorId(id).subscribe(clientes => {
      // console.log(clientes)
      // console.log("Busca ok")
      
      this.nome = clientes.nome;
      this.cpf = clientes.cpf;
      this.logradouro = clientes.logradouro;
      this.numero = clientes.numero;
      this.bairro = clientes.bairro;
      this.cidade = clientes.cidade;
      this.estado = clientes.estado;
      this.email = clientes.email;
      this.telefone = clientes.telefone;
      // this.nomepet = clientes.pet['nome'];

      this.pets = clientes.pet;

      console.log(this.pets)
    }, err => {
      console.log('Erro ao listar os alunos', err)
    })
  }


  //o id já está setado, então aproveitamos e direcionamos para a página de criação de pets, vamos utilizá-lo para vincular o cliente pelo id
  irPaginaCriarPet(){
    console.log("ir pagina criar pet")
    console.log(this.id)
    this.router.navigate([`create-pet/${this.id}`]);
  }
    
  
  removerPet(petId: string) {
    console.log("remover pet")
    if (window.confirm('Você tem certeza que deseja deletar o Pet?')) {

      this.petService.removerPet(petId).subscribe(clientes => {
           
        alert("Pet deletado com Sucesso!")

        //atualizar lista após deletar
        this.buscarClientesPorId(this.id);

      }, err => {
        console.log('Erro ao Deletar o Pet', err)
      })
    }
  }

  atualizarPet(petId: unknown) {
    console.log("atualizar pet")
    this.router.navigate([`update-pet/${petId}`]);
  }


}
