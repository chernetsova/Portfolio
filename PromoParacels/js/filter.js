
$(document).ready(function(){

    $("[name=gender]").on('change', function(){

       var gender = $(this).filter(':checked').val();

        $(".coord-sum").removeClass('rounded-circle btn-red coord').removeAttr('style');

        event.preventDefault();

        var img = $(".gender-img").find('img');
        var src = img.attr('src');
        var splt = src.lastIndexOf('/');
        var png = src.split('.png');
        var src_old = src.substr(splt, src.length);
        var src_new = '/' + gender + '.png';
        img.attr('src', src.replace(src_old, src_new));

        $.ajax({
            url:'filters/sum_data.php',
            type:'POST',
            data: 'gender='+gender,
            dataType : 'json',
            beforeSend: function(){},
            success: function(data){
                var str = JSON.stringify(data);
                var p = JSON.parse(str);

                //Title
                var a = [];
                var b = [];

                //Value
                var c = [];
                var d = [];


                $.each(p, function(key, val) {

                    a.push(val.title);
                    c.push(val.value);

                    for(var i=0; i<a.length; i++){
                        if (b.indexOf(a[i]) === -1 && a[i] !== '')
                            b.push(a[i]);
                    }

                    for(var i=0; i<c.length; i++){
                        if (d.indexOf(c[i]) === -1 && c[i] !== '')
                            d.push(c[i]);
                    }


                });

                $("#sum-field").html('<option value="">Выберите область</option>');
                $("#view-sum").html('<option value="">Выберите вид</option>');
                $("#survey-sum").text('');

                for(var i=0; i<b.length; i++){
                    $("#sum-field").append('<option value="' + d[i] + '">' + b[i] + '</option>');
                }
            }
        });

        $("#sum-field").on('change', function(){

            var field = $("option:selected",this).val();

            $.ajax({
                url:'filters/field_filter.php',
                type:'POST',
                dataType : 'json',
                data: 'gender='+gender+'&field='+field,
                beforeSend: function(){},
                success: function(data){
                    var str = JSON.stringify(data);
                    var p = JSON.parse(str);

                    //Рисуем области

                    setTimeout(function(){ $(".coord-sum").addClass('rounded-circle btn-red pulse').attr('style', p.style);},100);

                    //Виды диагностики.
                    $("#view-sum").html('<option value="">Выберите вид</option>');
                    $("#survey-sum").text('');
                    $.each(p.mrt, function(key, val){

                        $("#view-sum").append('<option value="' + val.title + '">' + val.title + '</option>');

                    });

                }
        });

        });

        $("#view-sum").on('change', function(){
            var view = $("option:selected",this).val();
            var field = $("#sum-field option:selected").val();

            $.ajax({
                url:'filters/price_filter.php',
                type:'POST',
                data: 'gender='+gender+'&field='+field+'&view='+encodeURIComponent(view),
                dataType : 'json',
                beforeSend: function(){},
                success: function(data){
                    var str = JSON.stringify(data);
                    var p = JSON.parse(str);
                    $("#survey-sum").text(p.price);
                }
            });

        });

    });

});