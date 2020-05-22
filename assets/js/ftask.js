'use strict';
export class Users {
    constructor(users) {
        this.users = users;
    }
    [Symbol.iterator](){
        let i=0;
        let users = this.users;
        return{
            next(){
                if(i<users.length){
                    return{done:false,value:users[i++]};
                }
                return {done: true};
            }
        }
    }
}


//{allUsers};