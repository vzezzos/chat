import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/providers/authentification.service';
import { User } from 'src/app/models/user';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output()
  createdUserEvent: EventEmitter<any> = new EventEmitter<any>();
  addUserForm: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  passwordHidden: boolean = true;
  
  constructor(private authentification: AuthentificationService) { }

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
    this.confirmPassword = new FormControl('');
    this.addUserForm = new FormGroup({
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  } 

  submitUser() {
    console.log(this.addUserForm.value);
    this.authentification.addUser(this.addUserForm.value).subscribe((user: User) => {
      console.log('User crée', user);
      this.createdUserEvent.emit({username: this.username.value, password: this.password.value});
    });
  }

  changeVisibiltyPassword() {
    this.passwordHidden = !this.passwordHidden;
  }
}
