import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEmpleados } from './eliminar-empleados';

describe('EliminarEmpleados', () => {
  let component: EliminarEmpleados;
  let fixture: ComponentFixture<EliminarEmpleados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarEmpleados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEmpleados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
