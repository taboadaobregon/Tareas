import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  
  listarTareas: Tarea[] = [];

  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){

    //crear un objeto tarea
    const tarea : Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    
    //agregar el objeto al array

    this.listarTareas.push(tarea);

    //reset al formulario

    this.nombreTarea = '';

  }

  eliminarTarea(index :number):void{

    this.listarTareas.splice(index,1);
  }

  actualizartarea( index:number,tarea:Tarea):void{

    this.listarTareas[index].estado = !tarea.estado;
    
  }
}
