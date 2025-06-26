import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Registro } from './registro/registro';
import { ListadoEmpleados } from './listado-empleados/listado-empleados';
import { Empleados } from './empleados';
import { PaginaInicio } from './pagina-inicio/pagina-inicio';
import { EliminarEmpleado } from './eliminar-empleado/eliminar-empleado';
import { Titulo } from "./titulo/titulo";

@NgModule({
  declarations: [
    PaginaInicio,
    Registro,           
    ListadoEmpleados,
    EliminarEmpleado,
    Titulo    
  ],
  imports: [
    CommonModule,
    FormsModule,
],
  exports: [
    PaginaInicio,
    ListadoEmpleados  
  ],
  providers: [
    Empleados          
  ]
})
export class EmpleadosModule { }