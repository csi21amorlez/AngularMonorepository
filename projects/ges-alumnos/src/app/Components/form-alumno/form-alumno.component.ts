import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../../Interfaces/alumno';
import { AlumnosService } from '../../Services/alumnos.service';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  alumno?:Alumno;
  //Para controlar si el alumno existe o no
  nuevoAlumno = true;

  constructor(
    private almService:AlumnosService,
    private ruta:ActivatedRoute,
    private form:FormBuilder
    ) { }

  ngOnInit(): void {
    if(this.ruta.snapshot.paramMap.get('documentId')){
      this.nuevoAlumno = false;
    }
  }

}
