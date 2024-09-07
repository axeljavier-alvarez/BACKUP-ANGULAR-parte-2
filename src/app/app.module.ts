import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    EjemploComponent,
    VerProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
