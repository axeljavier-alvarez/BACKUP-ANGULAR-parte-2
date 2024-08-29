import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UsuarioService]
})
export class NavbarComponent implements OnInit {

  // entre comillas el mismo nombre que puse en el json del login
  public identidad;

  constructor(public _usuarioService: UsuarioService) {
    /* para mostrar el nombre del usuario jajajajaja */
    /* this.identidad = JSON.parse(localStorage.getItem('identidad')); */
    // cada vez que inicie un valor el componente sera nuevo :)
    this.identidad = this._usuarioService.obtenerIdentidad();
   }

  ngOnInit(): void {
    /*
    // como local storage
    console.log(localStorage.getItem('identidad'));
    // como json
    console.log(JSON.parse(localStorage.getItem('identidad'))); */

    console.log(this.identidad);
  }



  clearToken(){
    localStorage.clear();
  }

}
