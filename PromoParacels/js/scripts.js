$(window).load(function(){

    $("#head").trigger('change');
    $("#gender-man").trigger('change');

});

$(document).ready(function(){

    function setEqualHeight(columns)
    {
        var tallestcolumn = 0;
        columns.each(
            function()
            {
                currentHeight = $(this).height();
                if(currentHeight > tallestcolumn)
                {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }

    $(window).load(function() {

        setEqualHeight($(".survey-item .survey-img"));
        setEqualHeight($(".survey-item .survey-title"));
        setEqualHeight($(".survey-item .survey-text"));

    });

    $(window).resize(function() {

        setEqualHeight($(".survey-item .survey-img"));
        setEqualHeight($(".survey-item .survey-title"));
        setEqualHeight($(".survey-item .survey-text"));

    });

    $(".menu-click").on("click","a", function (event) {

        event.preventDefault();

        var id = $(this).attr('id');
        var top = $('a[name=' + id + ']').offset().top;
        var scroll = $(window).scrollTop();

        $('body,html').animate({scrollTop: top}, 1500);

    });

    $(".btn-scroll").on('click', function(){
        var form = $(this).data('form');
        var top = $('a[name=' + form + ']').offset().top;
        var scroll = $(window).scrollTop();

        $('body,html').animate({scrollTop: top}, 1500);
    });


    function mrt(mrt){
                $.ajax({
            url:'filters/mrt_template.php',
            type:'POST',
            data: 'mrt='+mrt,
            beforeSend: function(){
                $(".block-tab").html('Загружаю ...');
            },
            success: function(data){
                $(".block-tab").html(data);
            }
        });

    }

    function circle(circle){
        var className = $("."+circle);
        var top = className.css('top');
        var left = className.css('left');
        if(className){
        $(".coord").removeClass('pulse').css({'transform': 'scale(1)'});
//        className.addClass('pulse').css({'width':'15px', 'height': '15px'});
        className.addClass('pulse').css({'transform': 'scale(2)'});
        }
        $("[name=tab-mrt]").filter('[value='+circle+']').prop('checked', true);
    }


    $(".coord").on('click', function(){
        var data = $(this).data('tab');
        circle(data);
        mrt(data);
    });

        $("[name=tab-mrt]").on('change', function(){

        var mrtVal = $(this).filter(':checked').val();
            circle(mrtVal);
            mrt(mrtVal);

    });

    $(".modal-li").on('click', function(){
    	var img = $(this).find('img').attr('src');
    	var content = $("#modal-li").find('.li-img');
    	content.html('<img src="'+img+'" alt="" title="" class="img-fluid" >');
    });

    $.fn.setCursorPosition = function(pos) {
        this.each(function(index, elem) {
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        });
        return this;
    };

    $(".phone").on("click", function(){
        var phone = $(this);
        var value = phone.val();

        if(value == ''){
            phone.val('+7');
        }

        phone.setCursorPosition(phone.val().length);
    });

    $("[name=firstName]").on('click', function(){
        $(this).attr('placeholder', "");
    });

    $("[name=firstName]").on('focusout', function(){
        var firstName = $(this);
        if(firstName.val() == ''){
            $(this).attr('placeholder', "Введите Ваше имя");
        }
        else{
            $(this).attr('placeholder', "");
        }
    });

    $("[type=submit]").on('click', function(){

        var this_obj = $(this);
        var form_submit = this_obj.closest("form");
        var phone = form_submit.find(".phone").val();
        var phone_error = form_submit.find(".phone");
        var pattern = /^((\+7)?)?[0-9]{10}$/;

        if(phone.search(pattern) == 0){
            phone_error.css({'background':'transparent'});
        }
        else {
            phone_error.css({'background':'#c95c52'});
            return false;
        }

        form_submit.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: "POST",
                url: "send.php",
                data: form_submit.serialize()
            }).done(function(){
                    form_submit[0].reset();
                    $("#message").modal('show');
                });
        });


    });
});