$(document).ready(function(){

    $(window).load(function(){
        $(".navbar-call").each(function(){
            var navbar_call = $(this);
            var call_text = navbar_call.text();
            var text_color = call_text.substr(0, 7);
            var text_new = call_text.substr(7, call_text.length);
            var call_href = navbar_call.attr('href').replace(/\s/g, "");
            navbar_call.html('<span style="color: #a4a7a9">'+text_color+'</span>'+text_new);
           navbar_call.attr('href', call_href);
        });

    });

    $(".btn-next").on('click', function(event){
        event.preventDefault();

        var id = $(this).attr('id');
        var top = $('a[name=' + id + ']').offset().top;
        var scroll = $(window).scrollTop();

        $('body,html').animate({scrollTop: top}, 1000);

   });

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

        setEqualHeight($(".advantage-numb .numb-title"));
        setEqualHeight($(".stock-info .stock-title"));

    });

    $(window).resize(function() {

        setEqualHeight($(".tab span.tab-title .numb-title"));
        setEqualHeight($(".stock-info .stock-title"));

    });

    $(window).scroll(function(){
        if ($(this).scrollTop() >= "1150"){
            $(".btn-top").css({'display':'flex'}).fadeIn('slow');
        }
        else{
            $(".btn-top").fadeOut('slow');
        }
    });

    $(".btn-top").on('click', function(){
        $("html, body").animate({scrollTop:0},"slow");
    });
    
    $(".btn-close").on('click', function(){
        $(this).closest('.modal').fadeOut('slow');
    });
    
    $(".click").on('click', function(){
        var target = $(this).data('target');
 
        setTimeout(function(){$(".modal#" + target).fadeIn('slow').css({'display': 'flex'})},100);
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
    
    $(".phone").bind('click keyup mousdown', function(){
        var phone = $(this);
        phone.closest('.form-field').removeClass('phone-error');
    });
    
        $("[type=submit]").on('click', function(){
        
        var this_obj = $(this);
        var form_title = this_obj.closest('.modal').find('.title').text();
        var form_submit = this_obj.closest("form");
        var phone = form_submit.find(".phone").val();
        var phone_error = form_submit.find(".phone").closest(".form-field");
        var pattern = /^((\+7)?)?[0-9]{10}$/;
            
            $('input[name=form-title]').val(form_title);

            if(phone.search(pattern) == 0){
                phone_error.removeClass("phone-error");
                form_submit.find(".phone").removeClass("required");
            }
            else {
                phone_error.addClass("phone-error");
                form_submit.find(".phone").addClass("required");
                return false;
            }
        
        form_submit.submit(function(e){
            e.preventDefault();
            
            $.ajax({
                type: "POST",
                url: "send.php",
                data: form_submit.serialize()
            }).done(function(){
                ga('send', 'event', 'form', 'send');
                form_submit[0].reset();
                $(".modal").fadeOut('slow');
                $("#message").fadeIn('slow').css({'display':'flex'});
                setTimeout(function(){$("#message").fadeOut('slow')},3000);
            });
        });
        
        
    });

})
