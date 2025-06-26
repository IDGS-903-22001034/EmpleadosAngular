import { Component } from '@angular/core';
import { Empleados } from '../empleados';
import { IEmpleado } from '../../interfaces/empleado';

@Component({
  selector: 'app-listado-empleados',
  standalone: false,
  templateUrl: './listado-empleados.html',
  styleUrl: './listado-empleados.css'
})
export class ListadoEmpleados {
  //@Input() //Decorador para definir un parámetro de entrada
  //clientes: ICliente[] = [];

  //Inyectamos el servicio
  constructor(private empleadosService: Empleados) {}

  //Definimos un metodo get para obtener la lista de clientes
  get empleados(): IEmpleado[]{
    return this.empleadosService.empleados
  }
  eliminarEmpleado(id: number) {
    this.empleadosService.eliminarEmpleado(id);
  }
}
