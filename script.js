'use strict';

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


let calc = (a, b) => a + b

console.log(calc(3, 4));

console.log(calc(8, 4));


function retVar() {
  let num = 50;
  return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "Test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));
