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
    
    function recursiveList (data, curUl) {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        for(var i = 0; i < data.length; i++){

            if(!Array.isArray(data[i])){
                var li = document.createElement('li');
                curUl.appendChild(li);
                li.innerHTML = data[i];
            }
            
            if(Array.isArray(data[i])){
                var ul = document.createElement('ul');
                li.appendChild(ul);
                recursiveList (data[i], ul);
            }
        }

        return list;
    }
    

    function recursiveHeadings (data, level) {
        //var fragment = document.createDocumentFragment();
		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        for(var i = 0; i < data.length; i++){
            
             if(!Array.isArray(data[i])){

                if(level === 1){
                    var h1 = document.createElement('h1');
                    headings.appendChild(h1);
                    h1.innerHTML = data[i];
                }

                if(level === 2){
                    var h2 = document.createElement('h2');
                    headings.appendChild(h2);
                    h2.innerHTML = data[i];
                }

                if(level === 3){
                    var h3 = document.createElement('h3');
                    headings.appendChild(h3);
                    h3.innerHTML = data[i];
                }
                
            }

            if(Array.isArray(data[i])){
                recursiveHeadings (data[i], level + 1);

            }
        }
        
    }

    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
        var firstName = document.getElementById('first-name');
        var lastName = document.getElementById('last-name');
        var submit = document.getElementById('submit').addEventListener("click", valid);
        function valid(){
            if(firstName.value.length <= 0){
                document.getElementById('first-name').style.borderColor = "red";
            } 
             if(lastName.value.length <= 0){
                document.getElementById('last-name').style.borderColor = "red";
            }
            if(firstName.value.length > 0 && lastName.value.length > 0){
                document.getElementById('first-name').style.border = "2px inset";
                document.getElementById('last-name').style.border = "2px inset";
                alert("Evrything is ok!");
            }      
        }
    }
	
	//вызывать функции здесь!
    sortHandler();
    simpleValidation(form);
    var arr = [1,2,[3,4,[6,7,8],9],10,11];
    var ul = document.createElement('ul');
    list.appendChild(ul);
    recursiveList (arr,ul);
    var level2 = 1;
    recursiveHeadings (arr, level2);
   
})();