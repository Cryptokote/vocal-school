import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentsListModule} from './students-list/students-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateStudentComponent } from './create-student/create-student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import {LoaderModule} from './loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    PaymentModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsListModule,
    LoaderModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ModalModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
