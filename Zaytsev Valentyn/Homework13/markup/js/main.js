$(document).ready(function(){
    function maximumBlok (max){
        var maxBlok = 0;
        $.each(max,function(){
            if (maxBlok < $(this).height()){
                maxBlok = $(this).height()
            }
    });
        max.height(maxBlok)
    }
    maximumBlok($(".box"));
    maximumBlok($(".block"));

    //Выделяем первые li каждого ul красным

    $('ul.list li:first-child').css('color', 'red');

    //нумерация чётных элементов списка

    $("ul.list li").each(function(index){
        if(index%2){
            $(this).prepend(++index);
        }
    });

        //По клику на элемент списка назначать на него класс "active"

    $("ul.list li").on('click',function(){
        $(this).parent().find('li').removeClass('active');
        $(this).addClass("active")
    })

    //Очистить поля формы от введенных данных по клику на Clean
    $("button.btn-clean").on('click',function(e){
        e.preventDefault();
        $('#form')[0].reset();
    })
});
