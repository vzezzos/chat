
export class User {

    constructor(
        public username: string,
        public admin?: boolean,
        public id?: string,
        public password?: string
    ) {
    }

}