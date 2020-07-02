"use strict";



// alert("Hello World");

// const result = confirm('Are you here?');
// const answer = prompt('how old are you?', '');


// console.log(typeof answer);

// let answers = [];

// answers[0] = prompt('What is you name?', '');
// answers[1] = prompt('You so name?', '');
// answers[2] = prompt('How old are you?', '');

// console.log(typeof answers);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Vasya";

// alert(`Привет, ${user}`);


// console.log(10%6);


// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('More!');
// } else { 
//     console.log('Good!');
// }


// (num === 50) ? console.log('Fine!') : console.log('Bad!');



// switch (num) {
//     case 49:
//         console.log('Не верно!');
//         break;
//     case 100:
//         console.log('Не верно!');
//         break;
//         case 50:
//             console.log('Верно!');
//             break;
//         default:
//             console.log('Не сегодня!');
//             break;
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

//В начале делаем, потом проверяем условия и если нужно выходим из цикла!

// let num = 50;

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num <= 55);


// for (let i = 1; i <= 8; i++) {
//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }

// let num = 20;

// function showFirstMassage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMassage("Hello World");
// console.log(num);


// function calc(a, b) {
//     return (a + b) ;
// }

// console.log(calc(4, 3));
// console.log(calc(8, 12));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const calc2 = (a, b) => a + b;


const str = "test";

// console.log(str[2] = 'd');



console.log(str.toUpperCase());
console.log(str);

let fruit = "Some fruit";
console.log(fruit.indexOf("r"));




const logg = "Hello World";
// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));