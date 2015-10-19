var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));


function multiplicationTable(size) {
  var table = []; // создаем массив
  for(var i=0; i<size; i++){
  	table[i] = [];
  	for(var j=0; j<size; j++){
      table[i][j] = (i+1)*(j+1);//перемножаем значения массива
    }
  }
  return table;
}

function matrix (size) {
  var matrix = []; // создаем массив
  for(var i=0; i<size; i++){ 
  	matrix[i] = [];
  	for(var j=0; j<size; j++){
      var diag = size - 1 - i;           // обратная диагональ    
  		if (i == j){                      // единицы
  			matrix[i][j] = 1;
  		} else if (j == diag){            // двойки
  			  matrix[i][j] = 2;
  		} else if ( j < 4 && i>2 && i<7){ // шестерки
  				matrix[i][j] = 6;
      } else if ( j < 1){               // шестерки
         	matrix[i][j] = 6;
  		} else if (j >5 && i>2 && i<7){  // четверки
  				matrix[i][j] = 4;
  		} else if (j>8){             // четверки
  			  matrix[i][j] = 4;
      } else if (i<4) {          // тройки
      	matrix[i][j] = 3;
  		} else if (i>5){          // пятерки
  			matrix[i][j] = 5;
  		} 
  	}
  }
  return matrix;
}

function pascal (size) {
	var triangle = [];
	for(var i=0; i<size; i++){ 
		triangle[i] = [];
    for(var j=0; j<(i+1); j++){//количество значений в массиве пропорционально индексу строки
        var rows = (i-1) > 0; //строка со 2 индекса
        if (rows){
      	var valueArray_1 = triangle[i-1][j-1];//уравнения для построения матрицы 1
      	var valueArray_2 = triangle[i-1][j];//уравнения для построения матрицы 2
      	if (valueArray_1 == null || valueArray_2 == null){
      		triangle[i][j] = 1;
      	} else {
      		triangle[i][j] = valueArray_1 + valueArray_2;
      	}
      } else {
      	triangle[i][j] = 1;
      }
    }
  }
  return triangle;
}

function render (array) {
	var rowsQty = array.length;
	var result = [];
	for (var i = 0; i < rowsQty; i++) {
		var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
		result.push(row);
	}
	return result.join('');
}
