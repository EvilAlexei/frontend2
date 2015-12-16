var elem = document.getElementById('operators');
var sign;
elem.addEventListener('click', function(e){
    e.preventDefault();
    sign =  e.target.innerHTML;
});

var calculate = document.getElementsByClassName('btn-calc')[0];

calculate.addEventListener('click',function(e){
    e.preventDefault();

    var first_value = document.getElementById('first-value').value;
    var second_value = document.getElementById('second-value').value;
    var result = document.getElementById('result');
    if  ((result.value = eval(first_value + sign + second_value))== Infinity) {
        console.log('1')
        alert("Деление на ноль запрещено!");
    } else if (isFinite(first_value) && isFinite(second_value)) {
        console.log('2')
        result.value = eval(first_value + sign + second_value);
    } else {
        console.log('3')
       alert("Вы ввели не число");
    }
});




