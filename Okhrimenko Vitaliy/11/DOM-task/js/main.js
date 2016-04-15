(function(){
    function bubbleSort(data) {
        var arr = data.slice()
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var i;
        var arrText = document.createElement('p');
        var sortText = document.createElement('p');
        for(i = 0; i < 10; i++){
            arr[i] = getRandomInt(1, 100);
        }
        arrText.innerHTML = 'Array: ' + arr.join(' ');
        document.getElementById('sort').appendChild(arrText);
        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
        document.getElementById('sort').appendChild(sortText);
    }

    //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
    //исходный массив [1,2,[3,4,[6,7,8],9],10,11]
    function recursiveList (data) {
        var ul = document.createElement('ul');
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement('li');
            if(typeof data[i] === 'object') {
                var internalList = recursiveList(data[i]);
                li.appendChild(internalList);
            } else {
                li.innerHTML = data[i];
            }
            ul.appendChild(li);
        }
        return ul;
    }

    //@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
    //исходный массив [1,2,[3,4,[6,7,8],9],10,11]
    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
		weight = weight || 1;
        for (var i = 0; i < data.length; i++) {
            var h = document.createElement('h' + weight);
            if (typeof  data[i] === 'object') {
                fragment.appendChild(recursiveHeadings(data[i], weight + 1));
            }
            else {
                h.innerHTML = data[i]
            }
            fragment.appendChild(h);
        }
        return fragment;
    }

    //@todo при сабмите формы проверять поля на пустотое значение.
    //При ошибке подсвечивать красным соответствующее поле.
    //Если оба поля заполнены, вывести сообщение об удачной отправке формы
    function simpleValidation(form) {
        var inputs = document.getElementsByTagName('input');
        var submit = document.getElementsByTagName('button')[0];

        submit.addEventListener('click', function (e) {
            e.preventDefault();
            var error = false;
            for (var i = 0; i < inputs.length; i++) {
                var color = '';
                if (inputs[i].value == '') {
                    color = 'red';
                    error = true;
                }
                inputs[i].setAttribute('style', 'background: ' + color);
            }
            if (error == true) {
                alert('Ошибка!!! Необходимо заполнить все поля')
            }
            else {
                alert('Поля заполненны верно');
            }
        })
    }
	
	//вызывать функции здесь!
    var arr = [1,2,[3,4,[6,7,8],9],10,11];
    var list = document.getElementById('list');
    var headings = document.getElementById('headings');
    var form = document.getElementById('form');

    sortHandler();
    list.appendChild(recursiveList(arr));
    headings.appendChild(recursiveHeadings(arr));
    simpleValidation(form);

})();