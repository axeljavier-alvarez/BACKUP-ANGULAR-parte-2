import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// IMPORTACION COMPONENTES
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'ejemplo', component: EjemploComponent},
  // ruta para llevar datos :)
  { path: 'verProducto/:idProducto', component: VerProductoComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
