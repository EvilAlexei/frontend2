var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
  var table = [];
  var result;
  for (var i = 1; i <= size; i++){
    table[i - 1] = [];
    for (var j = 1; j <= size; j++){
        result = i * j;
        table[i - 1][j - 1] = result;
      }
  }
  return table;
}
function matrix (size) {
  var matrix = [];
  for(var i = 1; i <= size; i++){
    matrix[i - 1] = [];
    for(var j = 1; j <= size; j++){
      /* 1 */
      if (i === j){
        matrix[i - 1][j - 1] = 1;
      }
      /* 2 */
      if (i + j === 11){
        matrix[i - 1][j - 1] = 2;
      }
      /* 3 */
      if(i < 11 - j && j > i ){
        matrix[i - 1][j - 1] = 3;
      }
      /* 4 */
      if(i > 11 - j && j > i){
        matrix[i - 1][j - 1] = 4;
      }
      /* 5 */
      if(j < i && i > 11 - j ){
        matrix[i - 1][j - 1] = 5;
      }
      /* 6 */
      if(i > j && i < 11 - j){
        matrix[i - 1][j - 1] = 6;
      }
    }
  }
  return matrix; 
}
function pascal (size) {
  var triangle = [];
    for (var i = 0; i < size; i++){
      triangle [i] = [];
      for (var j = 0; j < size; j++){
        if(i > j && i >= 1 && j <= 0 ){
          triangle[i][j] = 1;
        }
        if (i === j){
          triangle[i][j] = 1;
        }
        if (i > j && j >= 1){
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
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


