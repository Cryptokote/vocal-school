import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';
import {catchError, filter, map} from 'rxjs/internal/operators';

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

  getStudentLastLessonDate(lessons) {
    return lessons.length > 0
      ? new Date(lessons.sort((a, b) => b.date - a.date)[0].date * 1000)
      : null;
  }

  getStudentsList() {
    return this.apiService.getJson('getStudents').pipe(
      map((response) => {
        const students = response.students;
        students.forEach(student => {
          student.indivCounterClass = this.getStudentIndivsCounterClass(student.remaining_indivs);
          student.lastLessonDate = this.getStudentLastLessonDate(student.lessons);
          student.lastPayedDate = student.last_payed_date
            ? new Date(student.last_payed_date * 1000)
            : null;
        });
        // return students.filter(student => student.mail.indexOf('test') !== -1);
        return students.filter(student => student.mail.indexOf('test') === -1);
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
