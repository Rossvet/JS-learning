'use strict'

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let answer = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");

let appData = {
    Budget: money,
    timeData: time,
    expenses: {answer : answer2},
    optionalExpenses: "",
    income: "",
    saving: false
};

alert(money/30);