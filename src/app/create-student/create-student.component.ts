import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {StudentsListService} from '../students-list/students-list.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  studentForm;
  constructor(private formBuilder: FormBuilder, private studentListService: StudentsListService ) {
    this.studentForm = this.formBuilder.group({
      name: '',
      phone: '',
      email: '',
      remainIndivs: '',
      indivCost: '',
      abonCost: '',
      abonAmmount: '',
      abonDays: ''
    });
  }

  ngOnInit() {
    if (history.state.data) {
      this.studentForm.patchValue({
        name: history.state.data.name,
        phone: history.state.data.phone,
        email: history.state.data.mail,
        remainIndivs: history.state.data.remaining_indivs,
        indivCost: history.state.data.indiv_cost,
        abonCost: history.state.data.abon_cost,
        abonAmmount: history.state.data.abon_ammount,
        abonDays: history.state.data.abon_days
      });
    }
  }

  saveStudent() {
    this.studentListService.createStudents({
      name: this.studentForm.get('name').value,
      phone: this.studentForm.get('phone').value,
      mail: this.studentForm.get('email').value,
      remaining_indivs: this.studentForm.get('remainIndivs').value,
      indiv_cost: this.studentForm.get('indivCost').value,
      abon_cost: this.studentForm.get('abonCost').value,
      abon_ammount: this.studentForm.get('abonAmmount').value,
      abon_days: this.studentForm.get('abonDays').value
    }).subscribe(response => console.log(response));
  }
}

