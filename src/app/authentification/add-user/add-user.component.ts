import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output()
  createdUserEvent: EventEmitter<User> = new EventEmitter<User>();
  addUserForm: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  passwordHidden: boolean = true;
  
  constructor() { }

  ngOnInit() {
    
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.email = new FormControl('');
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*-])(?=.{8,})/))
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      (control: FormControl) => confirmPasswordValidator(this.password, control)
    ]);
    this.addUserForm = new FormGroup({
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  submitUser() {
    this.createdUserEvent.emit(this.addUserForm.value);
}

  changeVisibiltyPassword() {
    this.passwordHidden = !this.passwordHidden;
  }
}

function confirmPasswordValidator(password: FormControl, confirmPassword: FormControl) {
  return password.value === confirmPassword.value ? null : { mismatch: {err: 'Passwords doesn\'t match'}};
}