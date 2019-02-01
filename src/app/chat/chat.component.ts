import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthentificationService } from '../providers/authentification.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  users: User[] = [];
  username: string;
  selectedUserToSend: User;

  constructor(private authentification: AuthentificationService) {
   }

  ngOnInit() {
    this.authentification.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
      this.username = this.authentification.user ? this.authentification.user.username : 'test';
    }, (err: Error) => {
      console.log(err);
    });
  }

  selectedUser(user: User) {
    console.log(user);
    this.selectedUserToSend = user;
  }
}
