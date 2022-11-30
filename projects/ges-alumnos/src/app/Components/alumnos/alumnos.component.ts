import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../Interfaces/alumno';
import { AlumnosService } from '../../Services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{

  alumnos:any[] = [];

  constructor(private almService:AlumnosService) { }


    ngOnInit(): void {
      this.almService.getAllAlumnos().subscribe((alumno) => {
        this.alumnos = alumno;
      });
    }



/*
  //Método antiguo
  getAllAlumnos(){
    this.almService.getAllAlumnos().subscribe(
      (almSnapshot:any) =>{
        //Vaciamos el array de alumnos para evitar que se repitan
        this.alumnos = [];
        //Recorremos almSnapshot para asignar los alumnos 1 a 1 a nuestra array de Alumnos
        almSnapshot.forEach((alumnoData:any) => {
          console.log(alumnoData)
          this.alumnos.push(alumnoData);
        });
      }
    )

  }
  */

}
