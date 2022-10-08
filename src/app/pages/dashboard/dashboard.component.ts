import { Component, OnInit } from '@angular/core';
import { faUsers, faMoneyCheck, faBox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  faUsers = faUsers;
  faMoneyCheck = faMoneyCheck;
  faBox = faBox;

  constructor() { }

  ngOnInit(): void {
  }

}
