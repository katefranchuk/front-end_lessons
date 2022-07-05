"use strict";
//Мінімум 1 завдання
/*
let age = prompt('Вкаіть ваш вік', '');
let message = '';

if (age >=1 && age <=11) {
	message = 'Ви ще дитина!';
} else if (age >= 12 && age <= 17) {
	message = 'Ви вже підліток!';
} else if (age >= 18 && age <= 59) {
	message = 'Ви дорослий!';
} else if (age >= 60) {
	message = 'Ви пенсіонер!';
} else if (age >100){
	message = 'Який незвичний вік!'
} else if (age == null || age == '') {
	message = 'Небажаєте відповідати?';
} else{
	message = 'Невірно введені дані. Спробуйте ще раз!';
}
alert(message);
*/


//Мінімум 2 завдання
/*
let number = prompt('Вкажіть число від 0 до 9', '');
if (number == 0){
	alert (')');
} else if (number == 1){
	alert ('!');
} else if (number == 2){
	alert ('@');
} else if (number == 3){
	alert ('#');
} else if (number == 3){
	alert ('#');
} else if (number == 4){
	alert ('$');
} else if (number == 5){
	alert ('%');
} else if (number == 6){
	alert ('^');
} else if (number == 7){
	alert ('&');
} else if (number == 8){
	alert ('*');
} else if (number == 9){
	alert ('(');
}
*/

//Мінімум 3 завдання
/*let firstNumber = Number(prompt('Введіть початок діапазону', ''));
let lastNumber = Number(prompt('Введіть кінець діапазону', ''));
let sum = 0;
 
while(firstNumber <= lastNumber){       
		 sum+=firstNumber;  
		 firstNumber++;
	 }
alert(sum);
*/


//Мінімум 4 завдання
/*
let firstNumber = Number(prompt('Введіть перше число', ''));
let secondNumber = Number(prompt('Введіть друге число', ''));
let greatestCommonDivisor;

while(firstNumber != secondNumber){
	if (firstNumber > secondNumber){
		firstNumber = firstNumber - secondNumber
	} else {
		secondNumber = secondNumber - firstNumber
	}
}
 
greatestCommonDivisor = firstNumber;
alert(greatestCommonDivisor);
 */



//Норма 2 завдання

let suma = +(prompt('Введіть суму покупки', ''));
let finalSuma;
const firstDiskount = 0.03;
const secondDiskount = 0.05;
const thirdDiskount = 0.07;


if (suma >= 200 && suma <= 300) {
	finalSuma = suma - suma * firstDiskount;
} else if (suma > 300 && suma <= 500) {
	finalSuma = suma - suma * secondDiskount;
} else {
	finalSuma = suma - suma * thirdDiskount;
}

alert(finalSuma);
