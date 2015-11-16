
var result = document.getElementById('result');
var firstValue = document.getElementById('first-value');
var secondValue = document.getElementById('second-value');
var button = document.getElementById('btn-calc');
var total;

window.onclick = function(e){
  var elem = e ? e.target : window.event.srcElement;
  var id = elem.id;
  var num1 = +firstValue.value;
  var num2 = +secondValue.value;

  if (isNaN(num1) || isNaN(num2)){
       alert("Введено не число");

  } else {
    
    switch (id) {
      case "+":
        total = num1 + num2
        break
      case "-":
        total = num1 - num2
        break
      case "*":
        total = num1 * num2
        break
      case "/":
        if (num2 === 0){
          alert("На ноль делить нельзя!");
        } else {
          total = num1 / num2
          break
        }
    }
  }
}
button.onclick = function(e) {
  e.preventDefault();
  result.value = total;
  return result;
};

