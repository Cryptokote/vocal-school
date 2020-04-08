import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsListComponent} from './students-list/students-list.component';
import {CreateStudentComponent} from './create-student/create-student.component';


const routes: Routes = [
  {path: '',    component: StudentsListComponent, pathMatch: 'full'},
  {path: 'createStudent', component: CreateStudentComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
