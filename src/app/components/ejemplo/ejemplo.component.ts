import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuarios.model';
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss'],
  /* PUEDO INDICARLE SI DEPENDE DE UN SERVICIO O VARIOS SERVICIOS */
  providers: [ProductosService, UsuarioService]
})
export class EjemploComponent implements OnInit {
/*
  title = 'Ejemplo';
  personas = [
    { nombre: 'Juan Solares', edad: 24},
    { nombre: 'Cristian', edad: 15},
    { nombre: 'Luis', edad: 42},
    { nombre: 'Iker', edad: 5}
  ]; */
  // productos

  public token;

  // 1. IMPORTAR EL PRODUCTO MODEL Y ASIGNARLE UN NOMBRE
  public productosModelGet: Producto;
  // 5. Model post para agregarlo
  public productosModelPost: Producto;
  // 2. PONER EL CONSTRUCTOR CON EL SERVICIO
  constructor(
    private _productoService: ProductosService,
    private titleService: Title,
    //  AA. inyectar el usuario en el constructor
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Ejemplo'); // Establece el título de la pestaña
    // lo el agregar :) para que se cumpla lo que estoy mandando
    this.productosModelPost = new Producto('', '', 0, 0, 0);
    this.token = this._usuarioService.obtenerToken();
  }
  // 4. PARA QUE MUESTRE EL ARRAY
  ngOnInit(): void {
    this.getProductos();
  }
  // 3. MANDAR A LLAMAR AL SERVICIO QUE DECLARE EN EL CONSTRUCTOR
  getProductos(){
    // AA mandar a llamar al token
    // BB cada vez que ingrese al controlador refrescara el token
    this._productoService.obtenerProductos(this.token).subscribe(
      (response)=>{
        this.productosModelGet = response.productos;
        console.log(this.productosModelGet);
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
  // 6. AGREGAR PRODUCTOS
  postProductos(){
    // variable para agregar
    this._productoService.agregarProducto(this.productosModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos();
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  // ELIMINAR PRODUCTOS, supuestamente la variable idProducto no existe, no se
  deleteProductos(idProducto){
    this._productoService.eliminarProducto(idProducto).subscribe(
      (response)=>{
        console.log(response);

        this.getProductos();
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

}
