'use strict';

const obj = { n: 5 };
console.dir(obj);

function inc(num) {
    num.n+=1;
}

inc(obj);

console.dir(obj);