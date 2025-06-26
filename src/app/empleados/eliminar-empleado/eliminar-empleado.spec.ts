import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEmpleado } from './eliminar-empleado';

describe('EliminarEmpleado', () => {
  let component: EliminarEmpleado;
  let fixture: ComponentFixture<EliminarEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarEmpleado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEmpleado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
