//(function(){
//    function bubbleSort(data) {
//        var arr = data.slice()
//        for (var i = 0; i < arr.length - 1; i++) {
//            for (var j = 0; j < arr.length - i - 1; j++) {
//                if(arr[j] > arr[j + 1]) {
//                    var tmp = arr[j];
//                    arr[j] = arr[j + 1];
//                    arr[j + 1] = tmp;
//                }
//            }
//        }
//        return arr;
//    }
//
//    function getRandomInt(min, max) {
//        return Math.floor(Math.random() * (max - min)) + min;
//    }
//
//    function sortHandler(){
//        var arr = [];
//        var i;
//        var arrText = document.createElement('p');
//        var sortText = document.createElement('p');
//        for(i = 0; i < 10; i++){
//            arr[i] = getRandomInt(1, 100);
//        }
//        arrText.innerHTML = 'Array: ' + arr.join(' ');
//        document.getElementById('sort').appendChild(arrText);
//        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
//        document.getElementById('sort').appendChild(sortText);
//    }


	var x = [1,2,[3,4,[6,7,8],9],10,11];
    function recursiveList(data) {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив 

	    var list;

	    if (data.length)
	    {
	        list = document.createElement('ul');

	        for (var i = 0; i < data.length; i++)
	        {
	            var li = document.createElement('li');

	            if (typeof(data[i]) == 'object' && data[i].length)
	            {
	                li.appendChild(recursiveList(data[i]));
	            }
	            else
	            {
	                li.appendChild(document.createTextNode(data[i]));
	            }

	            list.appendChild(li);
	        }
	    }

	    return list;
	}

    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]


        if (data.length)
        {
            if (typeof(weight) == 'undefined')
            {
                weight = 1;
            }

            for (var i = 0; i < data.length; i++)
            {
                if (typeof(data[i]) == 'object' && data[i].length)
                {
                    fragment.appendChild(recursiveHeadings(data[i], weight + 1));
                }
                else
                {
                    var h = document.createElement('h' + weight);

                    h.appendChild(document.createTextNode(data[i]));
                    fragment.appendChild(h);
                }
            }
        }

        return fragment;
    }



    function simpleValidation(form) {   	}
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы

			var fName = document.getElementById('first-name').value;
			var lName = document.getElementById('last-name').value;
			submitBtn.addEventListener("click",validate);

		function validate() {
			if (!fName.length ) {
				document.getElementById('first-name').setAttribute('style', 'border: 2px solid red');
				console.log("1");
			}  if (!lName.length) {
				document.getElementById('last-name').setAttribute('style', 'border: 2px solid red');

				console.log("2");
			} if (fName.length > 0 && lName.length > 0) {
				document.getElementById('first-name').setAttribute('style', 'border: none');
				document.getElementById('last-name').setAttribute('style', 'border: none');
				alert('Your form send');
				console.log("3");
			}

			document.forms['loginform'].submit();
		}

		



			// } else if (!fName.length && !lName.length) {
			// 	document.getElementById('first-name').setAttribute('style', 'border: 2px solid red');
			// 	document.getElementById('last-name').setAttribute('style', 'border: 2px solid red');
			// 	return false;
			// } else {
			// 	alert("It`sa OK");
			// }

	

			// }

			// if(!fName.length) {
			// 	document.getElementById('first-name').setAttribute('style', 'border: 2px solid red');
			// 	return false;
			//  } else if (!lName.length) {
			// 	document.getElementById('last-name').setAttribute('style', 'border: 2px solid red');
			// 	return false;
			// } else  {
			// 	document.getElementById('first-name').setAttribute('style', 'border: 2px solid red');
			// 	document.getElementById('last-name').setAttribute('style', 'border: 2px solid red');
			// 	return false;
			// }
		









		// function submitForm() {
		// 	document.forms['loginform'].submit();
		// }


		// addEventListener()
		// if(!fName.length || !lName.length) {
		// 	document.getElementById('nameF').innerHTML = "Must be field";
		// }


		// document.getElementById('submitBtn').addEventListener()


		



 








	//вызывать функции здесь!
    //sortHandler();
    document.getElementById('list').appendChild(recursiveList(x));
	document.getElementById('headings').appendChild(recursiveHeadings(x));





