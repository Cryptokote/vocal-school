import { Component } from '@angular/core';
import { faMicrophoneAlt, faUsers, faDollarSign, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt} from '@fortawesome/free-regular-svg-icons';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vocal-teacher-app';
  faMicrophoneAlt = faMicrophoneAlt;
  faUsers = faUsers;
  faDollarSign = faDollarSign;
  faCogs = faCogs;
  faMoneyBillAlt = faMoneyBillAlt;
  constructor(private apiService: ApiService) {
    // this.apiService.apiUrl = `http://127.0.0.1:8080/`;
    this.apiService.apiUrl = `https://vocal-teacher-helper.appspot.com/`;
  }
}
