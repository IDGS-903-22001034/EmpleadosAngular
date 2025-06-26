import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './eliminar-empleado.html',
  styleUrl: './eliminar-empleado.css',
  standalone: false
})
export class EliminarEmpleado {
  @Input() idEmpleado!: number;
  @Output() onEliminar = new EventEmitter<number>();

  eliminar() {
    this.onEliminar.emit(this.idEmpleado);
  }
}