var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
  var table = [];
  for (var i=0; i<size; i++)
  {
    table[i]=[i+1];
    for (var k=1; k<size; k++)
    {
      table [i][k]=(i+1)*(k+1);
    }
  }
  return table;
}

function matrix (size) {
  var matrix = [];
  for (var i=0; i<size;i++)
  {
    matrix[i]=[];
    for (var k=0; k<size; k++)
    {
      if (i==k)                                  // диагональ с "1"
      {
        matrix[i][k]=1;
      }
      else if (i+k==size-1)                      //диагональ с "2"
      {
        matrix[i][k]=2;
      }
      else if (i<4 && i<k && k<((size-1)-i))    //заполнение "3"
      {
        matrix[i][k]=3;
      }
      else if (k>5 && i<k && i>((size-1)-k))    //заполнение "4"
      {
        matrix[i][k]=4;
      }
      else if (i>5 && i>k && k>((size-1)-i))    //заполнение "5"
      {
        matrix[i][k]=5;
      }
      else                                      //заполнение "6"
      {
        matrix[i][k]=6;
      }
    }
  }
  return matrix;
}

function pascal (size) {
  var triangle = [];
  for (var i=0; i<size; i++)
  {
    triangle[i]=[1];
    for (var k=1; k<=i; k++)
    {
      triangle[i][k]=triangle[i-1][k-1]+triangle[i-1][k];
      if (triangle[i-1][k] == null)
      {
        triangle[i][i]=1;
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