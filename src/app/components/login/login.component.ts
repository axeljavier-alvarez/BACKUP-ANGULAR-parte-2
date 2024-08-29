import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuarios.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  /* siempre importar el provider */
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  // donde se guardaran los datos
  public usuarioModel: Usuario;



  // CONSTRUCTOR GENERAL
  constructor(private _usuariosService: UsuarioService,
    // este router me permite navegar desde el controlador
  private _router: Router
  ) {
    // instanciar
    this.usuarioModel = new Usuario(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      [{
        nombreProducto:"",
        cantidadComprada: 0,
        precioUnitario: 0
      }],
      0
    );
   }

  ngOnInit(): void {

    // 4. declarar este local storage  para que me lo muestre en la web
    // console.log(localStorage.getItem("token"));
  }

  // get Token, si es observable nos inscribimos a el
  getToken(){
    this._usuariosService.login(this.usuarioModel, "true").subscribe(
      (response)=>{

        console.log(response);

        // 3. para que el toquen sea permanente por mas que refresque la pagina verlo en herramientas de desarrollador
        localStorage.setItem("token", response.token);

      },
      (error)=>{
        console.log(<any>error);
      }
    );
  }

  //5. login para que me traiga el token y los datos del usuario en cualquier barra de navegación,
  // esta es la función final
  login(){

    this._usuariosService.login(this.usuarioModel).subscribe(
      (response)=>{
        // 7. datos del token
        this.getToken();
        // 8. almacenar los datos del usuario
        localStorage.setItem("identidad", JSON.stringify(response.usuario))
        console.log(response);


        this._router.navigate(['/ejemplo']);

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

}
