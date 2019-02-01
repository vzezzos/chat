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
  token: string;
  path: string;

  constructor(private http: HttpClient) {
    this.flagUser = false;
    this.flagAdmin = false;
    this.path = 'htpp://localhost:3000';
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
 
  signIn(user: User) {
    type LoginResult = { user: User, token: string };
    return this.http.post<LoginResult>('http://localhost:3000/users/login', user).pipe(
      map((result: LoginResult) => {
        this.user = result.user;
        this.token = result.token;
        return result;
      })
    );
  }

  getAllUsers() {
    return this.http.get<any>('http://localhost:3000/users').pipe(
      map((results: any) => {
        return results.map((user: any) => {
          const userLst = {...user, id : user._id};
          delete userLst._id;
          return userLst;
        });
      })
    );
  }
}
