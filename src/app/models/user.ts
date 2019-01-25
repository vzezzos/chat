import * as Crypto from 'crypto-js';

export class User {

    static idRef: number = 0;
    login: string;
    mdp: any;
    list: User[]= [];
    key: string = 'Monmotde!!Passssssserapas';
    id: number;
    admin: boolean;

    constructor(loginRef: string, mdpRef: string, adminRef: boolean) {
        this.login = loginRef;
        this.mdp = Crypto.AES.encrypt(mdpRef, this.key);
        this.id = User.idRef++;
        this.admin = adminRef;
    }
/*
    addLog(logsList: User[]) {
        return logsList.push();
    }

    removeLog(logsList: User[]) {
        return logsList.pop();
    }
*/
}