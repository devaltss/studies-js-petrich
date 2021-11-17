'use strict';

// ----------------------------------  События и их обработчики -------------------------

//let btn = document.getElementsByTagName('button'),
let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapperr'),
    link = document.querySelector('a');


// btn[5].style.backgroundColor = 'green';
// btn[6].style.backgroundColor = 'green';
// btn[7].style.backgroundColor = 'green';
for (let i = 5; i <= 7; i++) {
  btn[i].style.backgroundColor = 'green';  // мой код )))
}

// btn[5].onclick = function() {
//   alert('Вы нажали первую кнопку!');
// }

// btn[5].onclick = function() {
//   alert('Вы опять нажали первую кнопку!');
// }

// btn[5].addEventListener('click', function() {
//   alert('Вы нажали первую кнопку!');
// });

// btn[5].addEventListener('click', function() {
//   alert('Вы опять нажали первую кнопку!');
// });

// btn[0].addEventListener('mouseenter', function() {
//   alert('Вы навели на первую кнопку!');
// });



// btn[5].addEventListener('click', function(event) {
//   //console.log(event);
//   //let target = event.target;
//   //target.style.display = 'none';
//   //target.style.backgroundColor = 'gray';
//   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// wrap.addEventListener('click', function() {
//   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

btn.forEach(function(item) {
  item.addEventListener('mouseleave', function() {
    console.log("Вышли!");
  });
});







