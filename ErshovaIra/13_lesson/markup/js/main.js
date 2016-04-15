 $(document).ready(function(){

// the same height of box
var BoxHeight = 0;
$(".container .box").each(function(indx, element){
  if ($(this).outerHeight() > BoxHeight) {
    BoxHeight = $(this).outerHeight();
  }
  return BoxHeight;
});
$(".container .box").outerHeight(BoxHeight);

// the same height of block
var BlockHeight = 0;
$(".container .block").each(function(indx, element){
  if ($(this).outerHeight() > BlockHeight) {
    BlockHeight = $(this).outerHeight();
  }
  return BlockHeight;
});
$(".container .block").outerHeight(BlockHeight);


// add index number to all even LI
$('li:odd').each(function () {
  var text = $(this).text();
  $(this).text(($(this).index() + 1) + " " + text);
})

// red color text
$('.list li:first-child').css('color','red');


//clear input
$('.btn-clean').click(function(event){
  event.preventDefault();
  $("input:not([type=submit])").val("");  // delet value in inputs 
});


// add class="active"
$('.list').click(function (event){
    var lis = $(this).children();
    var li = $(event.target);

  if (event.target.tagName !== "LI"){ //if we click not on "LI"
     $(this).removeClass("active");
  } else if (lis.hasClass("active")) { //if "LI" already has class "active"
     lis.removeClass("active");
     li.addClass("active");
  } else {                     //if "LI" does not have class "active"
    li.addClass("active");
  }
});


});