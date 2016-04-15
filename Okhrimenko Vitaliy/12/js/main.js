    window.addEventListener('DOMContentLoaded', calculator);            //запуск функции по завершении загрузки файла

    function calculator() {
        var button = document.getElementsByClassName('btn-calc')[0];    //присвоение переменным значения элементов
        var operators = document.getElementsByClassName('operator');
        var result = document.getElementById('result');
        var sign;

        for (var i = 0; i < operators.length; i++) {
            operators[i].addEventListener('click', function (e) {       //добавление события при выборе знака
                e.preventDefault();                                     //отмена перехода по ссылке
                sign=this.getAttribute('href');                         //получаем выбранный знак и записываем в переменную

            })
        }

        button.addEventListener('click', function() {
            var firstValue = document.getElementById('first-value').value;          //присвоение переменным, значения из полей ввода
            var secondValue = document.getElementById('second-value').value;
            if (isNaN(firstValue) || isNaN(secondValue)) {                          //проверка на ввод не чисел
                alert ("Ошибка!!! Проверьте правильность ввода чисел.");
            }
            else if ((firstValue && secondValue) == '') {                   //проверка на отсутствие введённых данных
                alert ("Ошибка!!! Введите даннные.");
            }
            else if (sign == undefined){                                            //проверка на отсутствие выбранного знака
                alert ("Ошибка!!! Выберите необходимое действие: (+, -, *, /).");
            }
            else if ((secondValue == 0 ) && (sign == "/")) {                        //проверка деления на ноль
                alert("Ошибка!!! Попытка деления на ноль.");
            }
            else {
                result.value = eval(firstValue + sign + secondValue);               //вывод результата расчетов
            }
        })
    }
