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
import { ErrorComponent } from './pages/error/error.component';
import { CreatePetComponent } from './pages/create/create-pet/create-pet.component';
import { UpdatePetComponent } from './pages/update/update-pet/update-pet.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientesComponent,
    CreateClienteComponent,
    InformacaoClientesComponent,
    UpdateClienteComponent,
    ErrorComponent,
    CreatePetComponent,
    UpdatePetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule, FormsModule, ReactiveFormsModule, NgxMaskModule.forRoot(), provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ClientesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
