"use strict";
//Перше завдання
//Перший спосіб
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(1)); //0.3

//Другий спосіб
let num = (0.1 + 0.2) + Number.EPSILON;
let Num = Math.round(num * 100) / 100;
console.log(Num);

//Друге завдання
//Перший спосіб
let firstNum = +'1';
let secondNum = 2;
console.log(firstNum + secondNum); //3

//Другий спосіб
let string = '1';
let number = 2;

let stringToNumber = Number(string);
console.log(stringToNumber + number); //3


/* Третє завдання
let fleshDriveSize = +prompt('Вкажіть обсяг карти пам\'яті у Гб');
let fileSize = 820;
let count =  (fleshDriveSize * 1000) / fileSize;
let fileQuantity = Math.floor(count);
console.log(fileQuantity);
*/

/* Норма 1 завдання (1 спосіб)
let moneyAmount = +prompt('Вкажіть суму грошей в гаманці');
let chocolatePrise = +prompt ('Вкажіть вартість шоколадки');

let chocolateQuantity = Math.floor(moneyAmount / chocolatePrise);
let change = (moneyAmount%chocolatePrise).toFixed(2);

console.log(`Кількість шоколадок: ${chocolateQuantity}, Решта: ${change} `);
*/

//Норма 1 завдання (2 спосіб)
let moneyAmount = document.querySelector('.amount');
let chocolatePrise = document.querySelector('.price');
let button = document.querySelector('.btn');
let quantityResult = document.querySelector('.chocolate-quantity');
let changeResult = document.querySelector('.change');

button.onclick = () => {
	//quantityResult.innerHTML = Math.floor(moneyAmount / chocolatePrise);
	//changeResult.innerHTML = (moneyAmount % chocolatePrise).toFixed(2);
	quantityResult.innerHTML = +moneyAmount.value / +chocolatePrise.value;
}


//Норма 2 завдання
/*
let reverseNumber = '';
let randomNumber = +prompt('Вкажіть будь-яке тризначне число');
while (randomNumber > 0){
	reverseNumber = reverseNumber + (randomNumber % 10);
	randomNumber = parseInt(randomNumber/10);
  }
  console.log(reverseNumber);
*/

/*Максимум 1 завдання
let suma = +prompt('Вкажіть суму вкладу в банк на 2 місяці');
const interest = 0.05;
const term = 2;
const monthsQuantity = 12;

console.log ((suma * interest / monthsQuantity * term).toFixed(2));
*/



