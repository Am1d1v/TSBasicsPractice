"use strict";
const add = (first, second) => {
    return first + second;
};
console.log(add(1, 10));
const logger = (message) => {
    console.log(message);
};
logger('Hello');
const throwErroe = (message) => {
    throw new Error(message);
};
