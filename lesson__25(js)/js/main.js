"use strict";

let myNane = 'Kate';
let mySurname ='Franchuk';
const myBirthday = '05.12.1999';
const currentYear = '2022';

//let 1word = 'helo';
//let function = 'math';
/*
let * = '5';
let current-year = '2022';
*/


let userName = prompt('What is your name?', '');
alert (`Hello, ${userName}!`);


let userBirthday = prompt('What is your year of birth?', '');
alert (`You are ${currentYear - userBirthday} years old.`);


let squareLength = prompt('What is the length of the square side?', '');
alert (`So, P = ${squareLength * 4}.`);


let circleRadius = prompt('What is the radius of the circle?', '');
alert (`So, S =  ${3.14 * (circleRadius*2)}.`);

