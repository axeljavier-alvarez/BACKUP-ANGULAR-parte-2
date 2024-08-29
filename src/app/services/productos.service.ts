import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  /* -------------CREACION DE SERVICIO ------------------*/
  // 1. declarar la ruta
  public url: String = 'http://localhost:3000/api';

  // 4. HTTP headers para definir que cabeceras voy a usar se utiliza comúnmente en aplicaciones Angular para configurar los encabezados de una solicitud HTTP
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

 // 2. Constructor del http cliente
  constructor(public _http: HttpClient) { }

  // 3. Función de backend e importar el observable, poner la ruta y la función tal y como esta en el backend
  obtenerProductos(token): Observable <any> {
    // nuevo agregar token
    let headersToken = this.headersVariable.set('Authorization', token);

    // manda a llamar a la cabecera de autenticación que esta arriba
    return this._http.get(this.url + '/productos', { headers: headersToken});
  }


  // 5. Agregar producto e importarlo
  agregarProducto(modeloProducto: Producto): Observable<any> {
    // convertir el modelo producto a string que sea entendido
    let parametros = JSON.stringify(modeloProducto);
    // enviar las cabeceras
    return this._http.post(this.url + '/agregarProductos', parametros, { headers: this.headersVariable});

  }

  eliminarProducto(id: String): Observable<any>{
    return this._http.delete(this.url + '/eliminarProducto/' + id, {headers: this.headersVariable});
  }
 
}
