"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
let tests = [];
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 42;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = {};
const exampleObj = {
    prop1: 'Mando',
    prop2: true,
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let JP = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(JP));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
