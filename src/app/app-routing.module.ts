import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './pages/clientes/clientes.component';
import { InformacaoClientesComponent } from './pages/clientes/informacao-clientes/informacao-clientes.component';

import { CreateClienteComponent } from './pages/create/create-cliente/create-cliente.component';
import { CreatePetComponent } from './pages/create/create-pet/create-pet.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorComponent } from './pages/error/error.component';
import { UpdateClienteComponent } from './pages/update/update-cliente/update-cliente.component';
import { UpdatePetComponent } from './pages/update/update-pet/update-pet.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}, 
  {path: 'create-cliente', component: CreateClienteComponent},
  {path: 'clientes/update-cliente/:id', component: UpdateClienteComponent},
  {path: 'info-cliente/:id', component: InformacaoClientesComponent},
  {path: 'create-pet/:id', component: CreatePetComponent},
  {path: 'update-pet/:id', component: UpdatePetComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
