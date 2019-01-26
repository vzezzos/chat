import { Injectable } from '@angular/core';
import { User } from '../models/user';
import * as Crypto from 'crypto-js';
import { FormControl } from '@angular/forms';
//import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  userLst: User[] = [];
  flagAdmin: boolean;
  flagUser: boolean;
  //flagUser$$: BehaviorSubject<boolean>;
  //flagUser$: Observable<boolean>;
  user: User;

  constructor() {
    this.userLst = [
      new User('123456789', '87654321', true),
      new User('coucoutoi', 'coucoutoi', true),
      new User('coucoutoi1', 'coucoutoi1', false),
      new User('coucoutoi2', 'coucoutoi2', false),
      new User('coucoutoi3', 'coucoutoi3', false),
    ];

    /*
    const jSUser: string = localStorage.getItem('User');
    if (jSUser) {
      this.user = JSON.parse(jSUser);
      this.flagUser = true;
      this.flagAdmin = this.user.admin;
    } else {
      this.flagUser = false;
    }
    
    this.flagUser$$ = new BehaviorSubject(this.flagUser);
    this.flagUser$ = this.flagUser$$.asObservable();
    */
    this.flagUser = false;
    this.flagAdmin = false;
  }

  /*
  next(flagUser: boolean) {
    this.flagUser = flagUser;
    this.flagUser$$.next(flagUser);
  }
  */

/*  updateUser(flagUserRef: boolean) {
    this.next(flagUserRef);
    this.user = this.flagUser ? this.user : undefined;
    if (!this.flagUser) {
      localStorage.removeItem('User');
    } else {
      this.flagAdmin = this.user.admin;
    }
  }
  */

  getFlagAdmin(): boolean {
    return this.user.admin ? true : false;
  }

  getFlagUser(): boolean {
    return this.user ? true : false;
  }

  addUser(user: User) {
    this.userLst.push(user);
  }
 
  findUser(userName: FormControl, userMdp: FormControl): User{
    this.user =  this.userLst.find((user: User) => {
      const decryptMdp = Crypto.AES.decrypt(user.mdp, user.key).toString(Crypto.enc.Utf8);
      return user.login === userName.value && decryptMdp === userMdp.value;
    });
    //localStorage.setItem('User', JSON.stringify({...this.user, mdp: undefined}));
    return this.user;
  }
}
