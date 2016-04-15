$(document).ready(function() {

// 1 (задать всем блокам одинаковую высоту)
    function sameHeight(blocks) {
        var maxHeight = 0;
        blocks.each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        blocks.height(maxHeight);
    }

//2 (выделеть первый элемент всех списков красным)
    $('ul.list li:first-child').css('color', 'red');

//3 (при нажатии на кнопку очистить поля)
    $('.btn-clean').on('click', function(e) {
        e.preventDefault();
        $('[type = text]').val('');
        $('[type = password]').val('');
    });

//4 (добавить порядковый номер всем четным элементам списка)
    $('ul.list li').each(function(index){
        if (index %2) {
            $(this).prepend(index + 1);
        }
    });

//5 (при выборее элемента, назначить на него класс "active")
    $(".list li").on("click", function(){
        $(this).parent().find("li").removeClass("active");
        $(this).addClass("active");
    });

// вызов функций
    sameHeight($('.container .box'));
    sameHeight($('.container .block'));
})