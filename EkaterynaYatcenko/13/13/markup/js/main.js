$(document).ready(function(){
	/* 1 */
	var arr = [];
	var contentHight = $(".container > div");
	contentHight.each(function(){
		var heightAll = $(this).outerHeight(true);
				arr.unshift (heightAll);
	});
	var maxHeight = Math.max.apply(Math, arr);
	
	contentHight.each(function(){
		$(this).css("height", maxHeight);
	});
	
	/* 2 */
	$("ul.list li:first-child").css("color", "red");

	/* 3 */
	$( ".btn-clean" ).click(function() {
		var text = $("[type = text]").val("");
		var text = $("[type = password]").val("");
	});

	/* 4 */
	$("ul.list li").each(function(index){
	 	if(index % 2 != 0 ){
            $(this).prepend(index + 1);
        }
    });
		
	/* 5 */
	$( "ul > li" ).click(function() {
		if($( this ).not( ".active" )){
			$(this).toggleClass("active").siblings().removeClass('active');
		}
		
	});


});


