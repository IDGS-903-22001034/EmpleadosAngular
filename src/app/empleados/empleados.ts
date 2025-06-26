import { Injectable } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class Empleados {

  //Las propiedades privadas deben empezar con _
  private _empleados: IEmpleado[] = []

  get empleados(): IEmpleado[]{
    return this._empleados;
  }

  constructor() { 
    //Recuperamos la lista de localstorage
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }

  agregarNuevoEmpleado(empleado: IEmpleado){
    //Agregamos el nuevo cliente a la lista.
    this.empleados.push(empleado);

    //Guardamos la lista en el localstorage
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  eliminarEmpleado(id: number) {
  // Filtramos la lista para excluir al empleado con el ID indicado
  this._empleados = this._empleados.filter(e => e.idEmpleado !== id);

  // Guardamos la nueva lista en el localStorage
  localStorage.setItem('empleados', JSON.stringify(this._empleados));
}
}