import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


//import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  userLst: User[] = [];
  flagAdmin: boolean;
  flagUser: boolean;
  user: User;

  constructor(private http: HttpClient) {
    this.flagUser = false;
    this.flagAdmin = false;
  }

  getFlagAdmin(): boolean {
    return this.user.admin ? true : false;
  }

  getFlagUser(): boolean {
    return this.user ? true : false;
  }

  addUser(user: User) {
    return this.http.post('http://localhost:3000/users', user).pipe(
      map((user: any) => {
        const userCpy = {...user, id: user._id};
        delete userCpy._id;
        return userCpy;
      })
    );
  }

}
