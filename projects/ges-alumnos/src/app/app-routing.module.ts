import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './Components/alumnos/alumnos.component';
import { FormAlumnoComponent } from './Components/form-alumno/form-alumno.component';

const routes: Routes = [
  //Ruta vacia que reenvia al componente de alumnos
  { path: '', component: AlumnosComponent },
  {path:'editAlumno/:documentId', component:FormAlumnoComponent},
  {path:'creaAlumno', component:FormAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
