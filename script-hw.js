'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}
start();


let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true
};


function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
  
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      //console.log("bad result");
      i--;
    }
  }
}
chooseExpenses();

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       b = prompt("Во сколько обойдётся?", "");

//       if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");
//         appData.expenses[a] = b;
//       } else {
//         console.log("bad result");
//         i--;
//       }

//       i++;
// }


// Используем цикл DO... WHILE

// let i = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       b = prompt("Во сколько обойдётся?", "");

//       if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");
//         appData.expenses[a] = b;
//       } else {
//         console.log("bad result");
//         i--;
//       }

//       i++;
// } while(i < 2);


function detectDayBudget() {                                         // Расчет дневного бюджета
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Бюджет на 1 день составляет: " + appData.moneyPerDay + "руб.");
}
detectDayBudget();


function detectLevel() {                                        // Расчет уровня достатка
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}
detectLevel();


function checkSavings() {                                           // Расчет дохода с депозита
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
  }
}
checkSavings();

function chooseOptExpenses() {                                    // Необязательные расходы
  for (let i = 1; i <= 3; i++) {
    let questionOptExpenses = prompt("Статья необязательных расходов?");
    appData.optionalExpenses[i] = questionOptExpenses;
    console.log(appData.optionalExpenses);
    // if (i == 3){              // Это мой код, чтобы выводить в консоль один раз, когда введены все статьи расходов
    //   console.log(appData.optionalExpenses);
    // }
  }
}
chooseOptExpenses();