// page init
function initPage() {
	initAnimation(500);
	initAnimation2(500);
}
//function for cross browser search by class
function byClass(classList, node) {
 if(document.getElementsByClassName) {
  return (node || document).getElementsByClassName(classList);
 }
 else {
  var node = node || document,
  list = node.getElementsByTagName('*'),
  length = list.length,
  classArray = classList.split(/\s+/),
  classes = classArray.length,
  result = [], i,j;
  for(i = 0; i < length; i++) {
   for(j = 0; j < classes; j++)  {
    if(list[i].className.search('\\b' + classArray[j] + '\\b') != -1) {
     result.push(list[i]);
     break;
    }
   }
  }
  return result;
 }
}

//animation function init
function initAnimation(newWidth){
	var container = document.getElementById('container');
	var element = byClass('box', container)[0];
	var btnStart = byClass('start', container)[0];
	var btnStop = byClass('stop', container)[0];
	var elementWidth = element.offsetWidth;
	var index;
	
	function startAnim() {
		if (elementWidth < newWidth){
			index = setTimeout(function() {
				elementWidth += 1;
				element.style.width = elementWidth + "px";
				startAnim();
			}, 10);
		}
	}
	
	btnStart.addEventListener('click', startAnim);
	
	btnStop.addEventListener('click', function(){
		clearTimeout(index);
	});
}

//animation2 function init
function initAnimation2(newWidth){
	var container = document.getElementById('container2');
	var element = document.getElementsByClassName('box')[1];
	var btnGo = document.getElementsByClassName('go btn')[0];
	var btnStop = document.getElementsByClassName('stop btn')[1];
	var btnBack = document.getElementsByClassName('back btn')[0];
	var elementWidth = element.offsetWidth;
	var baseWidth = elementWidth;
	var index;

	function startAnim() {
		if (elementWidth < newWidth){
			index = setTimeout(function() {
				elementWidth += 1;
				element.style.width = elementWidth + "px";
				startAnim();
			}, 10);
		}
	}

	function startBackAnim() {
		if (elementWidth > baseWidth) {
			index =setTimeout(function() {
				elementWidth -= 1;
				element.style.width = elementWidth + "px";
				startBackAnim();
			}, 10);
		}
	}

	btnGo.addEventListener('click', startAnim);
	btnBack.addEventListener('click', startBackAnim);
	btnStop.addEventListener('click', function() {
		clearTimeout(index);
	});
}

if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
