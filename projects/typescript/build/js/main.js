"use strict";
// literal types
let myName = 'ismail';
let userName = 'ismail';
userName = 'john';
// functions
const add = (a, b) => {
    return a + b;
};
const logmsg = (message) => {
    console.log(message);
};
logmsg('Hello, TypeScript!');
logmsg(add(5, 10));
let subtract = function (a, b) {
    return a - b;
};
let multiply = function (c, d) {
    return c * d;
};
logmsg(multiply(5, 10));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default parameters values
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logmsg(addAll(2, 3, 2));
logmsg(addAll(2, 3));
logmsg(sumAll(2, 3));
// rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logmsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
