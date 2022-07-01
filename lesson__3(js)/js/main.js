"use strict";
//Мінімум 1 завдання
let age = prompt('Вкаіть ваш вік', '');

if (age <= 11){
	message = 'Ви ще дитина!';
} else if (age >= 12 && age <= 17){
	message = 'Ви вже підліток!';
} else if (age >=18 && age <= 59){
	message = 'Ви дорослий!';
} else if (age >=60) {
	message = 'Ви пенсіонер!';
}
alert(message);


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
/*
let moneyAmount = document.querySelector('.amount');
let chocolatePrise = document.querySelector('.price');
let button = document.querySelector('.btn');
let quantityResult = document.querySelector('.chocolate-quantity');
let changeResult = document.querySelector('.change');

button.onclick = () => {
	 //quantityResult.innerHTML = Math.floor(moneyAmount / chocolatePrise);
	 //changeResult.innerHTML = (moneyAmount % chocolatePrise).toFixed(2);
	 quantityResult.innerHTML = moneyAmount / chocolatePrise;
}
*/

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



