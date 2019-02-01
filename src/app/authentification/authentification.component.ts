import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthentificationService } from '../providers/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  userToLog: User;
  selectTab: number = 0;

  constructor(private authentification: AuthentificationService, private router: Router) { }

  ngOnInit() {
  }

  createdUser(user: User) {
    this.authentification.addUser(user).subscribe((userResponse: User) => {
      console.log('User crée', userResponse);
      this.userToLog = user;
      this.selectTab = 0;
    }, (err: Error) => {
      console.log(err);
    });
  }

  selectIndex(index) {
    this.selectTab = index;
  }

  signIn(user: User) {
    this.authentification.signIn(user).subscribe((result: { user: User, token: string }) => {
      alert('login confirmé');
      this.router.navigate(['/chat']);
    }, (err: Error) => {
      console.log(err);
    });
  }

}
