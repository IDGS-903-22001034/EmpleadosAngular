import { Component } from '@angular/core';
import { Empleados } from '../empleados';

@Component({
  selector: 'app-pagina-inicio',
  standalone: false,
  templateUrl: './pagina-inicio.html',
  styleUrl: './pagina-inicio.css'
})
export class PaginaInicio {
//Inyectamos el servicio de los empleados al componente
  constructor(private empleadoService: Empleados) {}
}
