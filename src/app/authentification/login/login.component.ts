import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../../providers/authentification.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _userToLog: User;
  @Input()
  set userToLog(user: User) {
    this._userToLog = user;
    console.log('DANS LE SETTER', user);
    if (this.username && this.password) {
      this.username.setValue(this._userToLog.username);
      this.password.setValue(this._userToLog.password);
    }
  }
  get userToLog(): User {
    return this._userToLog;
  }

  username: FormControl;
  password: FormControl;
  loginForm: FormGroup;
  flagUser: boolean;
  flagCo: boolean;
  passwordHidden: boolean = true;

  constructor(private authentification: AuthentificationService, private router: Router) { }

  ngOnInit() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password,
    });
    this.flagUser = false;
    this.flagCo = false;
  }

  changeVisibiltyPassword() {
    this.passwordHidden = !this.passwordHidden;
  }
}