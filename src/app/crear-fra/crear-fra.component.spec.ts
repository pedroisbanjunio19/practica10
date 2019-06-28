import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CrearFraComponent } from './crear-fra.component';

describe('Test Componente Formulario Crear Factura', () => {
  let component: CrearFraComponent;
  let fixture: ComponentFixture<CrearFraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ CrearFraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creación del componente', () => {
    expect(component).toBeTruthy();
  });

  it('Inclusión de campos fecha y tipos de IVA', () => {
    expect(component.formFra.contains('fecha')).toBeTruthy();
    expect(component.formFra.contains('tipo')).toBeTruthy();
  });

  it('Campo Razón Social requerido', () => {
    const control = component.formFra.get('razonSocial');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  
});
