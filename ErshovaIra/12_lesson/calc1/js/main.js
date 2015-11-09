
var result = document.getElementById('result');
var firstValue = document.getElementById('first-value');
var secondValue = document.getElementById('second-value');
var addition = document.getElementById('+');
var subtraction = document.getElementById('-');
var multiplication = document.getElementById('*');
var divisor = document.getElementById('/');
var button = document.getElementById('btn-calc');
var total;



addition.onclick = function(e) {
  e.preventDefault();
  if (isNaN(+firstValue.value) || isNaN(+secondValue.value)){
    alert("Введено не число");
  } else {
  total = +firstValue.value + +secondValue.value;
  }
  return total;
};

subtraction.onclick = function(e) {
  e.preventDefault();
  if (isNaN(+firstValue.value) || isNaN(+secondValue.value)){
    alert("Введено не число");
  } else {
  total = +firstValue.value - +secondValue.value;
  }
  return total;
};

multiplication.onclick = function(e) {
  e.preventDefault();
  if (isNaN(+firstValue.value) || isNaN(+secondValue.value)){
    alert("Введено не число");
  } else {
  total = +firstValue.value * +secondValue.value;
  }
  return total;
};

divisor.onclick = function(e) {
  e.preventDefault();
  if (+secondValue.value === 0){
    alert("На ноль делить нельзя!");
  } else if (isNaN(+firstValue.value) || isNaN(+secondValue.value)){
    alert("Введено не число");
  } else {
  total = +firstValue.value / +secondValue.value;
  }
  return total;
};

button.onclick = function(e) {
  e.preventDefault();
  result.value = total;
  return result;
};