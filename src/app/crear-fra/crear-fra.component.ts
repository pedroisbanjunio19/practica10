import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-fra',
  templateUrl: './crear-fra.component.html',
  styleUrls: ['./crear-fra.component.css']
})
export class CrearFraComponent implements OnInit {

  formFra: FormGroup;
  fechaActual = new Date();

  constructor() { }

  ngOnInit() {
    this.formFra = new FormGroup({
      razonSocial: new FormControl('', [Validators.required, Validators.minLength(4)]),
      numero: new FormControl(''),
      fecha: new FormControl(null),
      base: new FormControl(null, Validators.required),
      tipo: new FormControl(0.21),
      importeIVA: new FormControl(0),
      total: new FormControl(0),
    });
    this.onChanges();
  }

  onChanges() {
    this.formFra.valueChanges
          .subscribe(objetoForm => {
            this.formFra.get('importeIVA')
                        .patchValue(objetoForm.base * objetoForm.tipo, {emitEvent: false});
            this.formFra.get('total')
                        .patchValue(this.formFra.get('base').value + 
                                    this.formFra.get('importeIVA').value, {emitEvent: false});
          });
  }

}
