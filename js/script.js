/*

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a.length < 50) {
        console.log("Well done!");
        appData.expenses[a] = b;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert(" Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log(" К сожалению вы нищеброд!")
} else if (appData.moneyPerDay > 100 < 2000) {
    console.log(" Не плохо устроился")
} else if (appData.moneyPerDay > 2000) {
    console.log(" Ваще красаучик ")
} else {
    console.log(" Произошла ошибка ")
}*/

