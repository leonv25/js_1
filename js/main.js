let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName ('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
   
    let money, time;

   
    startBtn.addEventListener('click', function() {
        time = prompt ("Введите дату в формате YYYY-MM-DD", "");
        money = +prompt ("Ваш бюджет на месяц?", "");

        while (isNaN(money) || money == "" || money == null) {
            money = +prompt ("Ваш бюджет на месяц?", ""); 
        }

        expensesBtn.addEventListener('click', function() {
            let sum = 0;

        });

        appData.budget = money;
        appData.timeData = time;

        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();

    });
    
    

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function () {
            for (let i = 0; i < 2; i++) {
                let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt ("Во сколько обойдется?", "");
            
                if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            
                    console.log ("done");
            
                    appData.expenses[a] = b;
                } else {
                    console.log ("bad result");
                    i--;
                }
            }
        },
        detectDayBudget: function () {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
        },
        detectLevel: function () {
            if (appData.moneyPerDay < 100) {
                console.log ("Это минимальный уровень достатка!");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log ("Это средний уровень достатка!");
            } else if (appData.moneyPerDay > 2000) {
                console.log ("Это высокий уровень достатка!");
            } else {
                console.log ("Ошибочка...!");
            }
        },
        checkSavings: function () {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
        
                    appData.monthIncome = save/100/12*percent;
                    alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function () {
            for (let i = 1; i <= 3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
            }
        },
        chooseIncome: function () {
    
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    
            if (typeof(items) != "string" || items == "" || typeof(items) == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
            } else {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }
    
            appData.income.forEach (function (itemmassive, i) {
                alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
            });
        }
    };
    
    // for (let key in appData) {
    //     console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    // }

    console.log(yearValue);