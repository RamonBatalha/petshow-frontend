import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClientesService } from './services/clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateClienteComponent } from './pages/create/create-cliente/create-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformacaoClientesComponent } from './pages/clientes/informacao-clientes/informacao-clientes.component';
import { UpdateClienteComponent } from './pages/update/update-cliente/update-cliente.component';
import { NgxMaskModule} from 'ngx-mask';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientesComponent,
    CreateClienteComponent,
    InformacaoClientesComponent,
    UpdateClienteComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule, FormsModule, ReactiveFormsModule, NgxMaskModule.forRoot()
  ],
  providers: [ClientesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
