import { Component, OnInit } from '@angular/core';
import {StudentsListService} from './students-list.service';
import { faDollarSign, faCheck } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import {Router} from '@angular/router';
import {PaymentModalComponent} from '../payment-modal/payment-modal.component';
import {ModalOptions} from 'ngx-bootstrap';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  public students;
  public isLoading = false;
  faDollarSign = faDollarSign;
  faCheck = faCheck;
  bsModalRef: BsModalRef;
  constructor(private studentsListService: StudentsListService,
              private router: Router,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.isLoading = true;
    this.studentsListService.getStudentsList().subscribe((response) => {
      console.log(response);
      this.students = response.sort((a, b) => {
        return a.remaining_indivs - b.remaining_indivs;
      });
      this.isLoading = false;
    });
  }

  addCompletedLesson(studentName) {
    this.isLoading = true;
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

  openModalWithComponent(name: string) {
    const initialState = {studentName: name};
    this.bsModalRef = this.modalService.show(PaymentModalComponent, {initialState} as ModalOptions);
    this.bsModalRef.content.onClose.subscribe(paymentType => {
      this.addPayment(name, paymentType);
    });
  }
}
