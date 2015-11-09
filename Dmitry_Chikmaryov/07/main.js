var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
  var table = [];

  for( var i = 0; i < size; i++) {
    table[i] = [];
  }

  for( var x = 0; x < size; x++) {
    for( var y = 0; y < size; y++) {
        table[x][y] = (x+1)*(y+1)
    };
  };

  return table;
}

function matrix (size) {
  var matrix = [];

  for( var i = 0; i < size; i++) {
    matrix[i] = [];
  }

  for(var x = 0; x < size; x++){
    for(var y = 0; y < size; y++){

    if (x == y ) {
      matrix[x][y] = 1;
    } else if ((x + y) == 9) {
      matrix[x][y] = 2;
    } else if ( y > x && x < 4 && y < (size - x)) {
      matrix[x][y] = 3;
    } else if ( x > y && y < 4 && x < (size - y)) {
      matrix[x][y] = 6;
    } else if (y < x && x > 5){
      matrix[x][y] = 5;
    } else {
      matrix[x][y] = 4;
    }

  };
};
  return matrix;
}

function pascal (size) {
  var triangle = [];
  
  for(i = 0; i < size; i++) {
    triangle[i] = [];
  }

  for(x = 0; x < size; x++) {
    for(y = 0; y < size; y++) {

      if (y == 0) {
        triangle[x][y] = 1;
      } else if (x == y) {
        triangle[x][y] = 1;
      } else if (y > x) {
        triangle[x][y] = '';
      } else {
        triangle[x][y] = triangle[x-1][y] + triangle[x - 1][y - 1];
      }
      


    };
  };

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
