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


//Норма 1 завдання
let userName = prompt('What is your name?', '');
alert (`Hello, ${userName}!`);

//Норма 2 завдання
let userBirthday = prompt('What is your year of birth?', '');
alert (`You are ${currentYear - userBirthday} years old.`);

//Норма 3 завдання
let squareLength = prompt('What is the length of the square side?', '');
alert (`So, P = ${squareLength * 4}.`);


//Максимум 1 завдання
let circleRadius = prompt('What is the radius of the circle?', '');
alert (`So, S =  ${3.14 * (circleRadius*2)}.`);

//Максимум 2 завдання
let distance = document.querySelector('.distance');
let hour = document.querySelector('.hour');
let btn = document.querySelector('.count');
let speed = document.querySelector('.out');

btn.onclick = () => {
	speed.innerHTML = distance.value / hour.value;
}

//Максимум 3 завдання
let input = document.querySelector('.enter');
let currency = document.querySelector('.currency');
let button = document.querySelector('.btn');
let result = document.querySelector('.result');


const eur = 0.94;

button.onclick = () => {
	result.innerHTML = (input.value * eur).toFixed(2);
}





