let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName ('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

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
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        // startBtnClick: 'notclick',
        savings: false
        
    };

    optionalExpensesBtn.disabled = true;
    expensesBtn.disabled = true;
    countBtn.disabled = true;

   
    startBtn.addEventListener('click', function() {
        time = prompt ("Введите дату в формате YYYY-MM-DD", "");
        money = +prompt ("Ваш бюджет на месяц?", "");

        while (isNaN(money) || money == "" || money == null) {
            money = +prompt ("Ваш бюджет на месяц?", ""); 
        }
       
        appData.budget = money;
        appData.timeData = time;

        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();

        optionalExpensesBtn.disabled = false;
        expensesBtn.disabled = false;
        countBtn.disabled = false;

    });

    chooseItem.addEventListener('change', function() {
        let items = chooseItem.value;
        appData.income = items.split(", ");
        incomeValue.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    percentValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
    
   
    countBtn.addEventListener('click', function() {
        if(appData.budget != undefined) {

            appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
            
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Это минимальный уровень достатка!";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Это средний уровень достатка!";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Это высокий уровень достатка!";
            } else {
                levelValue.textContent = 'Произошла ошибка';
            }
        } else {
            dayBudgetValue.textContent = 'Произошла ошибка';
        }
    });

    expensesBtn.addEventListener('click', function() {
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
        
            if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50) {
        
                console.log ("done");
        
                appData.expenses[a] = b;
                sum += +b;
                expensesValue.textContent = sum;
            } else {
                console.log ("bad result");
                i--;
            }
        }
        expensesValue.textContent = sum;
    });

    
      
    // startBtn.addEventListener('click', function(event) {
    //     appData.startBtnClick = event.type;
    // });

    // let selectBtn = [optionalExpensesBtn, expensesBtn, countBtn];

    //     selectBtn.forEach(function(item) {
    //         item.addEventListener('click', function() {
    //             if (appData.startBtnClick == 'notclick') {
    //                 alert('Для начала работы с программой нажмите кнопку "Начать расчет"');
    //             } 
    //         });
    //     });


    
    