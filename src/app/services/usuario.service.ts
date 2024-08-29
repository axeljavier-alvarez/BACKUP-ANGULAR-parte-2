import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuarios.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  // 2 nuevas variables
  public identidad;
  public token;
  constructor(public _http: HttpClient) { }

  login(usuario, obtenerToken = null): Observable<any>{
    /* el toquen puede venir o no puede venir, por eso se pone null*/
    if(obtenerToken != null){
      usuario.obtenerToken = obtenerToken;
    }
    /* array de objetos que aparecera en el JSON */
    let params = JSON.stringify(usuario);
    /* mandar a llamar */
    return this._http.post(this.url + '/login', params, {headers: this.headersVariable});
  }

  // A. NUEVA FUNCIÓN
  obtenerToken(){
    // variable del local storage
    var token2 = localStorage.getItem("token");

    if(token2 != undefined){
      this.token = token2;
    } else {
      this.token = null;
    }

    return this.token;
  }

  /* convertir string a objeto */
  obtenerIdentidad(){
    // STRING convertirlo a objeto como en el navbar
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));

    if(identidad2 != undefined){
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }

    return this.identidad ;
  }

}
