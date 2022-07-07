"use strict";
//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
	let result = '';

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			result += '*'
		}
		result += '_'
	}
	document.querySelector('.out-1').innerHTML = result;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
function t2() {	
	let result2 = '';
	for (let i = 1; i < 4; i++) {
		result2 += `<br>${i}<br>`;
		for (let j = 0; j < 3; j++) {
			result2 += '*_'
		}
	}
	document.querySelector('.out-2').innerHTML = result2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
function t3() {
	let result3 = '';
	for (let i = 0; i < 4; i++) {
		result3 += '<br>';
		for (let j = 0; j < 3; j++) {
			result3 += '*_';
		}
	}
	document.querySelector('.out-3').innerHTML = result3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
	let result4 = '';
	for (let i = 1; i < 4; i++) {
		result4 += `${i}_`;
		for (let j = 1; j < 6; j++) {
			result4 += `${j}*`;
		}
	}
	document.querySelector('.out-4').innerHTML = result4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
function t5() {
	let result5 = '';
	for (let i = 0; i < 3; i++) {
		result5 += '<br>'; 
		for (let j = 1; j < 7; j++ ) {
			if (j % 2 !== 0) {
				result5 += 1;
			} else {
				result5 += 0;
			}
		}
	}

	document.querySelector('.out-5').innerHTML = result5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x


function t6() {
	let result6 = '';
	for (let i = 0; i < 3; i++) {
		result6 += '<br>';
		for (let j = 1; j < 7; j++) {
			if (j === 3 || j === 6) {
				result6 += 'x';
			} else if (j % 2 !== 0) {
				result6 += 1;
			} else {
				result6 += 0;
			}
		}
	}

	document.querySelector('.out-6').innerHTML = result6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

function t7() {
	let result7 = '';
	for (let i = 1; i < 5; i++) {
		result7 += '<br>';
		for (let j = 0; j < i; j++ ) {
			result7 += '*';
			console.log(j);
		}
	}
	document.querySelector('.out-7').innerHTML = result7;

}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {
	let result8 = '';
	for (let i = 1; i < 6; i++) {
		result8 += '<br>';
		for ( let j = 0; j < i; j++) {
			result8 += '*';
		}
	}

	document.querySelector('.out-8').innerHTML = result8;

}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {
	let result9 = '';
	for (let i = 2; i < 7; i++) {
		result9 += '<br>';
		for (let j = 1; j < i; j++) {
			result9 += `${j}_`;
		}
	}
	document.querySelector('.out-9').innerHTML = result9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_


function t10() {
	let result10 = '';
	for (let i = 0; i < 5; i++) {
		result10 += '<br>';
		for (let j = 1; j <= 10; j++) {
			if (j < 10) {
				result10 += `${i}${j}_`;
			} else {
				result10 += `${j * (i + 1)}`;
			}
		}
	}

	document.querySelector('.out-10').innerHTML = result10;

}

document.querySelector('.b-10').onclick = t10;