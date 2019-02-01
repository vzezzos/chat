import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output()
  selectedUserEvent: EventEmitter<User> = new EventEmitter<User>();
  @Input()
  users: User[];
  iconFlagContact: boolean = false;
  iconFlagSettings: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectUser(user: User) {
    this.selectedUserEvent.emit(user);
  }

  showOrHideContacts() {
    console.log("est-ce que je passe ici?", this.iconFlagContact);
    this.iconFlagContact = !this.iconFlagContact;
  }

  showOrHideSettings() {
    console.log("est-ce que je passe ici?", this.iconFlagContact);
    this.iconFlagSettings = !this.iconFlagSettings;
  }
}
