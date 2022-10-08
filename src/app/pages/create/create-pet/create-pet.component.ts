import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  //recebe o ir da URL
  idCliente: string | null = null;
  
  //Campo de formulário linkado com os inputs
  formPet = this.fb.group({
    nome: ["", [
      Validators.required,
      // Validators.maxLength(5)
    ]],
    sexo: ["", [
      Validators.required,
      // Validators.maxLength(30)
    ]], 
    idade: ["", [
      Validators.required,
      // Validators.maxLength(80)
    ]],
    especie: ["", [
      Validators.required,
      // Validators.maxLength(50)
    ]],
    peso: ["", [
      Validators.required,
      // Validators.maxLength(50)
    ]],
    cliente: [{id:this.idCliente}, [
      Validators.required
    ]]
  
  })



  constructor(private fb: FormBuilder, private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //buscando o id na URL
      this.idCliente = params.get("id")
      
      //atualizando o campo de formulário para receber o id
      this.formPet = this.fb.group({
        nome: ["", [
          Validators.required,
          // Validators.maxLength(5)
        ]],
        sexo: ["", [
          Validators.required,
          // Validators.maxLength(30)
        ]], 
        idade: ["", [
          Validators.required,
          // Validators.maxLength(80)
        ]],
        especie: ["", [
          Validators.required,
          // Validators.maxLength(50)
        ]],
        peso: ["", [
          Validators.required,
          // Validators.maxLength(50)
        ]],
        cliente: [{id:this.idCliente}, [
          Validators.required
        ]]
        
      })
    })
  }

  adicionarPet(){
     console.log(this.formPet.value)
     console.log(this.idCliente)
     this.petService.adicionarPet(this.formPet.value).subscribe(pet => {
      //mensagem de confimação
      console.log("Pet Criado com Sucesso: ");
      alert("Pet Criado com Sucesso: ");
      //limpando campo de input
      this.formPet.reset();
      //limpar campo de input
      
    }, err => {
      console.log("Erro ao cadastrar Pet", err)

    })
  }


}
