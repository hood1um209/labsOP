'use strict';

function generateKey(length, characters) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randindex = Math.floor(Math.random() * charactersLength);
        result += characters[randindex];
    }

    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);