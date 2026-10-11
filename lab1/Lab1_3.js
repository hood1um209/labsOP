'use strict';

const values = [
    3,
    'hello',
    true,
    2.718,
    -3,
    'JS',
    false,
    null,
    undefined
];

const counts = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0
};

for (const value of values) {
    const type = typeof value;

    if (counts[type] !== undefined) {
        counts[type]++;
    }
}

console.log(counts);