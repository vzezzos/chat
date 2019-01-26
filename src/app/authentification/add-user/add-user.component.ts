import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  username: FormControl;
  eMail: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor() { }

  ngOnInit() {
    this.username = new FormControl('');
    this.eMail = new FormControl('');
    this.password = new FormControl('');
    this.confirmPassword = new FormControl('');
    this.addUserForm = new FormGroup({
      username: this.username,
      eMail: this.eMail,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

}
