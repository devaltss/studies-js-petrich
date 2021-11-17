'use strict';
// ---------- 2.22. Получение элементов со страницы --------------

let box = document.getElementById('box'),
    //btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),       // получаем все элементы
    //heart = document.querySelectorAll('.wrapper .heart'),   //вложенность
    oneHeart = document.querySelector('.heart'),      // получаем только первый элемент на странице
    wrapper = document.querySelector('.wrapper');   

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);

// -------------------- Действия с элементами на странице ---------

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
//   item.style.backgroundColor = 'blue';
// });


let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');     // добавление класса к элементу

//document.body.appendChild(div);    // вставка в конце body 
//wrapper.appendChild(div);    //  вставка в конце родителя

//div.innerHTML = '<h1>Hello World!<h1>';      // вставка html кода
div.textContent = 'Hello World!';        // вставка текста, применяется, например, при вставке данных от пользователя для защиты от вирусов, либо текста в элемент

document.body.insertBefore(div, circle[1]);  //вставка в указанное место
document.body.removeChild(circle[2]);    // удаление указанного объекта
wrapper.removeChild(heart[1]);         // удаление

document.body.replaceChild(btn[1], circle[1]);  // замена одного элемента на другой

console.log(div);
console.log(text);




