import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  art={
    codigo:0 ,
    descripcion:"",
    precio:0
  }

  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];

  hayRegistros() {
    return this.articulos.length>0;              
  }

  borrar(codigo:number) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==codigo)
      {
        this.articulos.splice(x,1);
        return;
      }
  }

  agregar() {
    if (this.art.codigo==0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)
    {
      alert('ya existe un articulo con dicho codigo');
      return;
    }        
    this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });
    this.art.codigo=0;
    this.art.descripcion="";	
    this.art.precio=0;    
  }

  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }

  modificar() {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }

  borrarSeleccion() {
    // Buscar el índice del artículo que se está modificando o seleccionando
    let indice = this.articulos.findIndex(art => art.codigo == this.art.codigo);
    // Si se encontró el índice, borrar el elemento del array
    if (indice != -1) {
      this.articulos.splice(indice, 1);
      // Limpiar los campos de código, descripción y precio
      this.art.codigo = 0;
      this.art.descripcion = "";
      this.art.precio = 0;
    }
  }
  
  // Variable auxiliar para guardar el estado anterior
artAnterior = {
  codigo: 0,
  descripcion: "",
  precio: 0
}

// Método para guardar el estado anterior antes de crear un nuevo artículo
guardarAnterior() {
  this.artAnterior.codigo = this.art.codigo;
  this.artAnterior.descripcion = this.art.descripcion;
  this.artAnterior.precio = this.art.precio;
}

// Método para restaurar el estado anterior cuando se presiona el botón deshacer
deshacer() {
  this.art.codigo = this.artAnterior.codigo;
  this.art.descripcion = this.artAnterior.descripcion;
  this.art.precio = this.artAnterior.precio;
}

}
