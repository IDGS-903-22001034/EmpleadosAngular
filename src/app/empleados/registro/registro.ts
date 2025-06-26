import { Component } from '@angular/core';
import { IEmpleado } from '../../interfaces/empleado';
import { Empleados } from '../empleados';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.html',  
  styleUrls: ['./registro.css']    
})
export class Registro {
  nuevo: IEmpleado = {
    idEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: new Date(),
    sexo: ''
  };

  constructor(private empleadosService: Empleados) {}  

  agregar() {
    // Validaciones
    if (this.nuevo.idEmpleado <= 0) return;
    if (this.nuevo.nombre.trim().length === 0) return;
    if (!this.nuevo.correo) return;  // Mejor validación para correo
    if (!this.nuevo.telefono) return;
    if (!this.nuevo.fechaNacimiento) return;

    this.empleadosService.agregarNuevoEmpleado(this.nuevo);

    // Resetear el formulario
    this.nuevo = {
      idEmpleado: 0,
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: new Date(),
      sexo: ''
    };
  }



}