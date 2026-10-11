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

const counts = {};

for (const value of values) {
    const type = typeof value;

    if (counts[type] === undefined) {
        counts[type] = 0;
    }

    counts[type]++;
}

console.log(counts);