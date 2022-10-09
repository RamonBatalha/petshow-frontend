import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {
   
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
    cliente: [ {id:""}, [
      Validators.required
    ]], 
    id:  [ "", [
    ]]
  
  })

  constructor(private fb: FormBuilder, private router: ActivatedRoute, private petService: PetService, private route: Router) { }

  ngOnInit(): void {
     
    //Note que passamos o id cliente e o id do pet para atualizar. Temos os mesmo valores que vem da requisição, porém ids diferente (Id do pet != Id do Cliente)
    this.petService.bucarPetPorId(this.router.snapshot.params['id']).subscribe( result => {
          console.log(result)
          this.formPet = this.fb.group({
            nome: [result.nome, [
              Validators.required,
              // Validators.maxLength(5)
            ]],
            sexo: [result.sexo, [
              Validators.required,
              // Validators.maxLength(30)
            ]], 
            idade: [result.idade, [
              Validators.required,
              // Validators.maxLength(80)
            ]],
            especie: [result.especie, [
              Validators.required,
              // Validators.maxLength(50)
            ]],
            peso: [result.peso, [
              Validators.required,
              // Validators.maxLength(50)
            ]],
            cliente: [{id: result.cliente.id}, [
              Validators.required
            ]], 
            id:  [ result.id, [
            ]] 
          })
    })
  }

  atualizarPet() {

       this.petService.atualizarPet(this.formPet.value).subscribe(pet => {
        //mensagem de confimação
        console.log("Pet Atualizado com Sucesso: ");
        alert("Pet Atualizado com Sucesso: ");
        //redireciona para a página das informações do cliente
        this.route.navigate([`info-cliente/${pet.cliente.id}`]); 
      }, err => {
        console.log("Erro ao atualizar Pet", err)

      })

  }

}
