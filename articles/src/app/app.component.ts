import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'articles';

  art = {
    codigo: 0,
    descripcion: "",
    precio: 0
  }
  articulos = [
    { codigo: 0, descripcion: "alimento1", precio: 10 },
    { codigo: 1, descripcion: "alimento2", precio: 20 },
    { codigo: 2, descripcion: "alimento3", precio: 30 },
    { codigo: 3, descripcion: "alimento4", precio: 40 },
    { codigo: 4, descripcion: "alimento5", precio: 50 },
    { codigo: 5, descripcion: "alimento6", precio: 60 },
    { codigo: 6, descripcion: "alimento7", precio: 70 },
    { codigo: 7, descripcion: "alimento8", precio: 80 },
    { codigo: 8, descripcion: "alimento9", precio: 90 },
  ];

  // Usar operador ternario para devolver un valor booleano
  hayRegistros() {
    return this.articulos.length > 0 ? true : false;
  }

  // Usar método find para buscar el objeto con el código dado
  borrar(codigo:number) {
    let obj = this.articulos.find(obj => obj.codigo == codigo);
    if (obj) {
      // Usar método filter para devolver un nuevo array sin el objeto borrado
      this.articulos = this.articulos.filter(obj => obj.codigo != codigo);
    }
  }

  agregar() {
    // Usar operador ternario para mostrar un alerta o ejecutar una función
    this.art.codigo == 0 ? alert('Debe ingresar un codigo de articulo distinto a cero') : this.agregarArticulo();
    
  }

  // Crear una función aparte para agregar el artículo
  agregarArticulo() {
    // Usar método some para comprobar si existe algún objeto con el mismo código
    let existe = this.articulos.some(obj => obj.codigo == this.art.codigo);
    // Usar operador ternario para mostrar un alerta o agregar el objeto al array
    existe ? alert('ya existe un articulo con ese mismo nombre') : this.articulos.push(this.art);
    // Reiniciar los valores del objeto art
    this.art = {
      codigo: 0,
      descripcion: "",
      precio: 0
    }
    
  }

  
 seleccionar(art:{codigo:number;descripcion:string;precio:number;}) {
   // Usar destructuración de objetos para asignar las propiedades del objeto art al objeto this.art
   ({codigo:this.art.codigo,
   descripcion:this.art.descripcion,
   precio:this.art.precio} = art);
 }
 modificar() {
   // Usar método find para buscar el objeto con el mismo código que el objeto art
   let obj = this.articulos.find(obj => obj.codigo == this.art.codigo);
   if (obj) {
     // Usar destructuración de objetos para asignar las propiedades del objeto this.art al objeto encontrado
     ({descripcion:obj.descripcion,
     precio:obj.precio} = this.art);
   } else {
     alert('No existe el codigo del articculo ingresado')
   }
   
 }
}
