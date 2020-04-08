import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';
import {catchError, map} from 'rxjs/internal/operators';

@Injectable()
export class StudentsListService {

  constructor(private apiService: ApiService) { }
  getStudentIndivsCounterClass(remainingIndivs: number): string {
    if (remainingIndivs > 3) {
      return 'green';
    } else if (remainingIndivs > 1) {
      return 'yellow';
    }
    return 'red';
  }

  getStudentsList() {
    return this.apiService.getJson('getStudents').pipe(
      map((response) => {
        const students = response.students;
        students.forEach(student => {
          student.indivCounterClass = this.getStudentIndivsCounterClass(student.remaining_indivs);
        });
        return students;
      }),
      catchError(() => {
        return [];
      })
    );
  }

  completeLesson(studentName) {
    const formData = new FormData();
    Object.keys(studentName).forEach((key) => {
      formData.append(key, studentName[key]);
    });
    return this.apiService.postJson('lessonCompleted', formData);
  }

  createStudents(studentInfo) {
    console.log(studentInfo);
    const formData = new FormData();
    Object.keys(studentInfo).forEach((key) => {
      if (studentInfo[key] !== '') {
        formData.append(key, studentInfo[key]);
      }
    });
    return this.apiService.postJson('createStudent', formData);
  }

  addPayment(paymentInfo) {
    const formData = new FormData();
    Object.keys(paymentInfo).forEach((key) => {
      formData.append(key, paymentInfo[key]);
    });
    return this.apiService.postJson('addPayment', formData);
  }
}
