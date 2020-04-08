import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import {StudentsListService} from './students-list.service';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [StudentsListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [StudentsListService]
})
export class StudentsListModule { }
