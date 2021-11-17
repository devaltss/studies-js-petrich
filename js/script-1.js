//'use strict';

// a = 5;
// console.log(a);


//   console.log(4/0);
//   console.log('string'*9);

//   let rere;
//   console.log(rere);

// let persone = {
//   name: "John",
//   age: 25,
//   isMarried: false
// };

// console.log(persone["age"]);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[1])

//alert('Hello World!'); 
// let answer = confirm("Are you here?"); 
// console.log(answer); 
// let answer = +prompt("Есть ли вам 18?", "ХЗ"); 

// console.log(typeof(answer));
// console.log("arr" + " - object");
// console.log(4 + +" - object");

// let incr = 10,
//     decr = 10;

//incr++;
//decr--;
// console.log(incr++);
// console.log(decr--);
// console.log(5 % 2);
// console.log("2" === 2);

// let isChecked = false,
//     isClose = false;
// console.log(isChecked || !isClose);

// if (2 * 4 == 9) {
//   console.log("Верно!");
// } else {
//   console.log("Неверно!");
// }


// if (num < 49) {
//   console.log("No!");
// } else if (num > 100) {
//   console.log("Many!");
// } else {
//   console.log("Yes!");
// };

//(num == 50) ? console.log("Yes!") : console.log("No!");


// switch (num) {
//   case num < 49:
//     console.log("No!");
//     break;
//   case num > 100:   // нельзя использовать логические операции (==, больше, меньше и т.п.)
//     console.log("Many!");
//     break;
//   case num > 80:
//     console.log("For now Many!");
//     break;
//   case 50:
//     console.log("Yes!");
//     break;
//   default:
//     console.log("ХЗХЗ!");
//     break;
// }


//let num = 50;
// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 55)


// for (let i = 1; i < 8; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }

// -------------------------------------------- Функции ---------------------------------
// let num = 20;

// function showFirstMessage(text) {
//   alert(text);
//   //let num = 10;
//   console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);


// let calc = function(a, b) {
//   return (a + b);
// }


// let calc = (a, b) => a + b

// console.log(calc(3, 4));

// console.log(calc(8, 4));


// function retVar() {
//   let num = 50;
//   return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "Test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// //console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));
//----------------------------------------callback function ----------------------------------------------------------

// function first() {
//   //что-то делаем
//   setTimeout( function() {
//     console.log(1);
//   }, 500 );
// }

// function second() {
//   console.log(2);
// }

// first();
// second();


// function learnJS(lang, callback) {
//   console.log("Я учу " + lang);
//   callback();
// }

// function done() {
//   console.log("Я прошел 3й урок!")
// }

// learnJS("JavaScript", done);


// --------------------------------------- objects -----------------------------------------

//let obj = new Object();
// let options = {
//   width: 1024,
//   height: 1024,
//   name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//   border: "black",
//   bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//   console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);


// ------------------------------------ Массивы -----------------------------------------------

// let arr = ["first", 2, 3, "four", 5];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//   console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr);


// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//   console.log(key);
// }


// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);


// let arr = ["sfs", 'zzzz', "ppp", 'swer'],
//     i = arr.join(', ');
// console.log(i);


// let arr = ["sfs", 'zzzz', "ppp", 'swer'],
//   i = arr.sort();
// console.log(arr);

// let arr = [1, 15, 4],
//   i = arr.sort(compareNum);

// function compareNum(a, b) {
//   return a - b;
// }
// console.log(arr);

// ----------------------------- OOP ----------------------
// let soldier = {
//   health: 400,
//   armor: 100
// };

// let john = {
//   health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

//  -------------------- Ошибки в коде -----------------------

// function hello() {
//   console.log("Hello World!");
// }

// hello();

// function hi() {
//   console.log("Hi World!");
// }

// hi();

// let ar = [1, 15, 4, 30, 42],
//     i = arr.sort(compareNum);

// function compareNum(a, b) {
//   return a - b;
// }

// console.log(arr);

// ---------------------------------- Динамическая типизация ---------------------------------------

 // to String

 // 1)
// console.log(typeof(String(4)));
// // 2)
// console.log("ww" + 5);
// console.log(typeof("" + 5));
// console.log('https://vk.com/catalog/' + 5);

// // - to Number
// // 1)
// console.log(typeof(Number('5')));
// // 2)
// console.log(typeof(5 + +'5'));
// // 3)
// console.log(typeof(parseInt('15px', 10)));

// let ans = +prompt("Hello?", '');

// // false
// //  0, '', null, undefined, NaN

// let switcher = null;
// if (switcher) {
//   console.log("Working...");
// }
// switcher = 1;
// if (switcher) {
//   console.log("Working...");
// }

// //2)
// console.log(typeof(Boolean('5')));
// //3)
// console.log(typeof(!!'5'));


