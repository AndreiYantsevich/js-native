import {UserType} from './09_01.test';

let user = {
    name: 'Andrei',
    age: 29,
}

function increaseAge(user: UserType) {
    user.age++;
}