"use strict";
//Мінімум 2 завдання


function f1(a, b, c, d, e) { }

console.log(f1.length);


//Мінімум 3 завдання
let firstNumber = document.querySelector('.first-number');
let secondNumber = document.querySelector('.second-number');
let button = document.querySelector('.btn');
let result = document.querySelector('.result');


function f3(firstNumber, secondNumber) {
	if (firstNumber > secondNumber) {
		return 1;
	} else if (firstNumber < secondNumber) {
		return -1;
	} else {
		return 0;
	}
}

button.onclick = function () {
	result.innerHTML = f3(+firstNumber.value, +secondNumber.value);
}

//Мінімум 4 завдання
let n = document.querySelector('.number');
let result2 = document.querySelector('.result2');
let button2 = document.querySelector('.btn2');

function factorial(n) {
	return (n != 1) ? n * factorial(n - 1) : 1;
}

button2.onclick = function () {
	result2.innerHTML = factorial(+n.value);
}

//Мінімум 5 завдання
function f4(a, b, c) {
	let oneNumber = +`${a}${b}${c}`;
	return oneNumber;
}

console.log(f4(1, 4, 9));

//Мінімум 6 завдання
function calcArea(a, b = 1) {
	return a * b;
}

console.log(calcArea(4));

//Норма 1 завдання
//function isPerfect(number) {

//}

function is_perfect(number) {
	let temp = 0;
	for (let i = 1; i <= number / 2; i++) {
		if (number % i === 0) {
			temp += i;
		}
	}
	if (temp === number && temp !== 0) {
		console.log("It is a perfect number.");
	}
	else {
		console.log("It is not a perfect number.");
	}
}
is_perfect(6);

//Норма 2 завдання

function isPerfect(min, max) {
	let result = [];
	for (let i = min; i < max; i++) {
		let sum = 0;
		for (let j = 1; j <= i / 2; j++) {
			if (i % j === 0) 
				sum += j;		
		} 
		if (i === sum)
			result.push(i);
		}
		return result.toString();
	}
console.log(isPerfect(1, 1000));




