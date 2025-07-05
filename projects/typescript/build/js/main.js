"use strict";
let stringArr = ['one', 'two', 'three'];
let guiltars = ['Gibson', 'Fender', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'johnny';
stringArr.push('jimmy');
guiltars[0] = 1984;
guiltars.unshift('Ibanez');
guiltars = stringArr;
mixedData = guiltars;
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['EVH', 1984, true];
let mixed = ['EV', 198, true];
mixed = myTuple;
myTuple[1] = 5150;
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
const exampleObj = {
    prop1: 'David',
    prop2: 'true',
};
exampleObj.prop1 = 'Eddie';
let evh = {
    name: 'Eddie',
    active: false,
    albums: ['Van Halen', 1984, '5150']
};
let jp = {
    name: 'Jimmy Page',
    albums: ['1', '2', 'IV']
};
const greetGuiltarsit = (guiltarsit) => {
    if (guiltarsit.name) {
        return `Hello ${guiltarsit.name.toUpperCase()}!`;
    }
    return 'Hello World!';
};
console.log(greetGuiltarsit(jp));
