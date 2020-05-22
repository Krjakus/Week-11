"use strict";
import {Users} from "./ftask";


const allUsers = new Users([
    {name:"Sam"},
    {name:"Nick"},
    {name:"Bob"},
]);
const allUsersIterator = allUsers[Symbol.iterator]();

allUsersIterator.next();
allUsersIterator.next();
allUsersIterator.next();

for (const u of allUsers){
    console.log(u.name);
}
