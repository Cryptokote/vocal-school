import { Component, OnInit } from '@angular/core';
import {StudentsListService} from './students-list.service';
import { faDollarSign, faCheck } from '@fortawesome/free-solid-svg-icons';

import {Router} from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  public students;
  faDollarSign = faDollarSign;
  faCheck = faCheck;
  constructor(private studentsListService: StudentsListService, private router: Router) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.studentsListService.getStudentsList().subscribe((response) => {
      console.log(response);
      this.students = response.sort((a, b) => {
        return a.remaining_indivs - b.remaining_indivs;
      });
    });
  }

  addCompletedLesson(studentName) {
    this.studentsListService.completeLesson({name: studentName}).subscribe((response) => {
      this.initData();
    });
  }

  addPayment(studentName, paymentType) {
    const payment = {
      payment_type: paymentType,
      name: studentName,
      cash_card: 'card'
    };
    this.studentsListService.addPayment(payment).subscribe((response) => {
      this.initData();
    });
  }

  navigateToSingleStudent(student) {
    this.router.navigate(['/createStudent'], {state: {data: {...student}}});
  }
}
