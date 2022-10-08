import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './pages/clientes/clientes.component';
import { InformacaoClientesComponent } from './pages/clientes/informacao-clientes/informacao-clientes.component';

import { CreateClienteComponent } from './pages/create/create-cliente/create-cliente.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdateClienteComponent } from './pages/update/update-cliente/update-cliente.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'create-cliente', component: CreateClienteComponent},
  {path: 'clientes/update-cliente/:id', component: UpdateClienteComponent},
  {path: 'info-cliente/:id', component: InformacaoClientesComponent},
  {path: 'clientes', component: ClientesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
