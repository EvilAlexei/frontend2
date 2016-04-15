$(document).ready(function(){
    //Same height
        //First container
    var boxHeight = 0;

    $('.box').each(function(){
       if($(this).height() > boxHeight) {
           boxHeight = $(this).height();
       }
    });
    $('.box').height(boxHeight);

        //Second container
    var blockHeight = 0;

    $('.block').each(function(){
        if($(this).height() > blockHeight) {
            blockHeight = $(this).height();
        }
    });
    $('.block').height(blockHeight);

    // Set color: red; for first elemet of the list
    $('.list > li:first-child').css('color','red');

    //Clearing form`s inputs
    $('.btn-clean').click(function(){
        event.preventDefault();
        $('#form').trigger('reset');
        console.log('Form cleared');
    });

    //Numering even list`s elements
    $('li:odd').each(function () {
        var text = $(this).text();
        $(this).text(($(this).index() +1 ) + '-' + text);
    })

    //Setting .active class onclick for li
    $('.list').each(function(){
        var ul = $(this);
        $(this).find('li').click(function(){
            ul.find('li').removeClass('active');
            $(this).addClass('active');
        })
    })
});

