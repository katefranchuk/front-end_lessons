"use strict";

//Варіант 1

const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const button = document.querySelector('#btn');
const userChoice = document.querySelector('#choice');

let result;
let computerChoice;


button.onclick = () => {
	let randomNumber = Math.floor(Math.random() * 3) + 1;
	switch (randomNumber) {
		case 1:
			computerChoice = 'Rock';
			break;
		case 2:
			computerChoice = 'Paper';
			break;
		case 3:
			computerChoice = 'Scissors';
			break;
	}
	computerChoiceDisplay.innerHTML = computerChoice;

	switch (+userChoice.value) {
		case 1:
			switch (randomNumber) {
				case 1:
					result = 'it\'s a draw!';
					break;

				case 2:
					result = 'You lost!';
					break;

				case 3:
					result = 'You are a winner!';
					break;

				default:
					break;
			}
			break;
		case 2:
			switch (randomNumber) {
				case 1:
					result = 'You are a winner!';
					break;

				case 2:
					result = 'it\'s a draw!';
					break;

				case 3:
					result = 'You lost!';
					break;

				default:
					break;
			}
			break;
		case 3:
			switch (randomNumber) {
				case 1:
					result = 'You lost!';
					break;

				case 2:
					result = 'You are a winner!';
					break;

				case 3:
					result = 'it\'s a draw!';
					break;

				default:
					break;
			}
			break;
	}
	resultDisplay.innerHTML = result;
}




//Варіант 2
/*
const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
	userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	generateComputerChoice()
	getResult()
}))

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random () * possibleChoices.length) + 1 //* 3 
	console.log(randomNumber)

	if (randomNumber === 1) {
		computerChoice = 'rock'
	}
	if (randomNumber === 2) {
		computerChoice = 'scissors'
	}
	if (randomNumber === 3) {
		computerChoice = 'paper'
	}

	computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
	if (computerChoice === userChoice){
		result = 'it\'s a draw!' 
	}
	if (computerChoice === 'rock' && userChoice === 'paper'){
		result = 'You are a winner!' 
	}
	if (computerChoice === 'rock' && userChoice === 'scissors'){
		result = 'You lost!' 
	}
	if (computerChoice === 'paper' && userChoice === 'scissors'){
		result = 'You are a winner!' 
	}
	if (computerChoice === 'paper' && userChoice === 'rock'){
		result = 'You lost!' 
	}
	if (computerChoice === 'scissors' && userChoice === 'paper'){
		result = 'You lost!' 
	}
	if (computerChoice === 'scissors' && userChoice === 'rock'){
		result = 'You are a winner!' 
	}
	resultDisplay.innerHTML = result
}

*/
