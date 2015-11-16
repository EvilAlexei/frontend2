var oper = document.getElementsByClassName("operator");
var x = document.getElementById("first-value");
var y = document.getElementById("second-value");
var a = document.getElementById("btn-calc");
var result = document.getElementById("result");
for(i = 0; i < oper.length; i++){
	oper[i].onclick = function fun(){
		
		var v = this.textContent;
		if(v === "+"){
			a.onclick = function myFunction() {
				result.value = +x.value + +y.value;
			}
		}
		if(v === "-"){
			a.onclick = function myFunction() {
				result.value = x.value - y.value;
			}
		}
		if(v === "*"){
			a.onclick = function myFunction() {
				result.value = x.value * y.value;
			}
		}
		if(v === "/"){
			a.onclick = function myFunction() {
				result.value = x.value / y.value;
			}
		}
		
	}
}



