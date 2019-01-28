import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  userToLog: User;
  selectTab: number = 0;

  constructor() { }

  ngOnInit() {
  }

  createdUser(user: User) {
    this.userToLog = user;
    this.selectTab = 0;
  }

  selectIndex(index) {
    this.selectTab = index;
  }
}
