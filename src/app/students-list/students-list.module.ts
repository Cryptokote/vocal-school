import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import {StudentsListService} from './students-list.service';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LoaderComponent} from '../loader/loader.component';
import {LoaderModule} from '../loader/loader.module';

@NgModule({
  declarations: [StudentsListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    LoaderModule
  ],
  providers: [StudentsListService]
})
export class StudentsListModule { }
