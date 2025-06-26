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
    if (this.nuevo.nombre.trim().length === 0){
      console.error('El nombre no puede estar vacío');
      return;
    } 
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(this.nuevo.correo)) {
        console.error('Correo electrónico inválido');
        return;
      }

    const telefonoRegex = /^[0-9]{10}$/;
      if (!telefonoRegex.test(this.nuevo.telefono)) {
        console.error('Número de teléfono inválido (deben ser 10 dígitos)');
        return;
      }
    if (!this.nuevo.fechaNacimiento === null) {
      return;
    }
      

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