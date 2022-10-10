import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { ClientesComponent } from './pages/clientes/clientes.component';
import { InformacaoClientesComponent } from './pages/clientes/informacao-clientes/informacao-clientes.component';

import { CreateClienteComponent } from './pages/create/create-cliente/create-cliente.component';
import { CreatePetComponent } from './pages/create/create-pet/create-pet.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateClienteComponent } from './pages/update/update-cliente/update-cliente.component';
import { UpdatePetComponent } from './pages/update/update-pet/update-pet.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'}, 
  {path: 'create-cliente', component: CreateClienteComponent, canActivate: [AuthGuard]},
  {path: 'clientes/update-cliente/:id', component: UpdateClienteComponent, canActivate: [AuthGuard]},
  {path: 'info-cliente/:id', component: InformacaoClientesComponent, canActivate: [AuthGuard]},
  {path: 'create-pet/:id', component: CreatePetComponent, canActivate: [AuthGuard]},
  {path: 'update-pet/:id', component: UpdatePetComponent, canActivate: [AuthGuard]},
  {path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
