import * as Crypto from 'crypto-js';

export const key: string = 'Monmotde!!Passssssserapas';

export class User {

    constructor(
        public login: string,
        public admin: boolean,
        public id: string,
        public mdp: string

    ) {
        //this.mdp = Crypto.AES.encrypt(mdpRef, key);
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