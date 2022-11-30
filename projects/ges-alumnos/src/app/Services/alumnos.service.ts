import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Alumno } from '../Interfaces/alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  //Simplemente cambia el tipo de coleccion que recibe
  private coleccion = 'alumnos';

  constructor(private fire: AngularFirestore) {}

  //Obtiene la informacion de un alumno
  getAlumno(id: string): Observable<any> {
    return this.fire.collection(this.coleccion).doc(id).snapshotChanges();
  }
  //Leer todos los alumnos
  getAllAlumnos(): Observable<any> {
    return this.fire.collection(this.coleccion).snapshotChanges();
    /*Snapshot changes se encarga de revisar la base de datos para
    comprobar si se han realizado cambios en esta
     */
  }
  //Nuevo alumno
  createAlumno(alm: Alumno) {
    return this.fire.collection(this.coleccion).add(alm);
  }
  //Update alumno
  updateAlumno(documentId: string, alm: Alumno) {
    return this.fire.collection(this.coleccion).doc(documentId).update(alm);
  }
  //Eliminar alumno
  deleteAlumno(documentId: string, alm: Alumno) {
    return this.fire.collection(this.coleccion).doc(documentId).delete();
  }
}
