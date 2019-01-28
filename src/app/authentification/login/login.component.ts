import { Component, OnInit, Input, OnChanges } from '@angular/core';
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

  _userToLog: any;
  @Input()
  set userToLog(user: any) {
    this._userToLog = user;
    console.log('DANS LE SETTER', user);
    if (this.username && this.mdp) {
      this.username.setValue(this._userToLog.username);
      this.mdp.setValue(this._userToLog.password);
    }
  }
  get userToLog(): any {
    return this._userToLog;
  }

  username: FormControl;
  mdp: FormControl;
  loginForm: FormGroup;
  flagUser: boolean;
  flagCo: boolean;

  constructor(private authentification: AuthentificationService, private router: Router) { }

  ngOnInit() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.mdp = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.loginForm = new FormGroup({
      username: this.username,
      mdp: this.mdp,
    });
    this.flagUser = false;
    this.flagCo = false;
  }

  checkIfCorrect() {
    this.flagUser = !!this.authentification.findUser(this.username, this.mdp);
    
    if (this.flagUser) {
      //this.authentification.updateUser(this.flagUser);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 0);
    }
    else {
      this.flagCo = true;
    }
  }

}
/*
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  username: FormControl;
  mdp: FormControl;
  flagUser: boolean;
  flagCo: boolean;
  subscription :Subscription;

  constructor(public router: Router, public authentification: AuthentificationService) {
  }

  ngOnInit() {
    this.subscription = this.authentification.flagUser$.subscribe((flag: boolean) => {
      if (!flag) {
        this.username = new FormControl('coucoutoi', [
          Validators.required,
          Validators.minLength(4),
        ]);
        this.mdp = new FormControl('coucoutoi', [
          Validators.required,
          Validators.minLength(8),
        ]);
        this.loginForm = new FormGroup({
          username: this.username,
          mdp: this.mdp,
        });
        this.flagUser = this.authentification.flagUser;
        this.flagCo = false;
      } else {
        this.username = new FormControl('');
        this.mdp = new FormControl('');
        this.loginForm = new FormGroup({
          username: this.username,
          mdp: this.mdp,
        });
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 0);
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription && this.subscription.closed === false) {
      this.subscription.unsubscribe();
    }
  }

  checkIfCorrect() {
    this.flagUser = !!this.authentification.findUser(this.username, this.mdp);
    
    if (this.flagUser) {
      this.authentification.updateUser(this.flagUser);
    }
    else {
      this.flagCo = true;
    }
  }
  
  deconnexionUser() {
    this.loginForm.reset();
    this.flagUser = false;
    this.flagCo = false;
    this.authentification.updateUser(false);
  }
}
*/