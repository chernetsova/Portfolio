<!DOCTYPE html>
<html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/icon.css">
    <link rel="stylesheet" href="css/color.css">
    <link rel="stylesheet" href="css/style.css">

     <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
     <link rel="icon" href="favicon.ico" type="image/x-icon">

     <title>LAND ROVER В АРТЕКС</title>

     <script src="http://api-maps.yandex.ru/2.1.17/?lang=ru_RU" type="text/javascript"></script>

    <script>

       var map;
       var body_width = screen.width;

        ymaps.ready(function() {
            
            if( body_width < 768 ){
                map = new ymaps.Map('map', {
                center: [55.762779, 37.369404],
                zoom: 14,
                controls: ["zoomControl"]
            });
                
                map.behaviors.disable('scrollZoom');
                
                var myPlacemark = new ymaps.Placemark([55.762779, 37.369404], {},
            {
            iconLayout: 'default#image',
            iconImageClipRect: [[0, 0], [28, 35]],
            iconImageHref: 'imgs/plasemark_xs.png',
            iconImageSize: [28, 35],
            iconImageOffset: [0, 0]
            });
                map.geoObjects.add(myPlacemark);
            }
            else{
              map = new ymaps.Map('map', {
                center: [55.762911, 37.361569],
                zoom: 16,
                controls: ["zoomControl"]
            });

            map.behaviors.disable('scrollZoom');

            var myPlacemark = new ymaps.Placemark([55.762779, 37.369404], {},
            {
            iconLayout: 'default#image',
            iconImageClipRect: [[0, 0], [60, 75]],
            iconImageHref: 'imgs/plasemark.png',
            iconImageSize: [60, 75],
            iconImageOffset: [0, 0]
            });
                map.geoObjects.add(myPlacemark);  
            }
            
        });

    </script>

    </head>
    <body>
        <div class="wrap">
            <div class="block nav fixed">
                <div class="container">
                    <div class="navbar">
                        <div class="navbar-logo">
                            <div class="logo-xs">
                                <img src="imgs/logo_lr.png" class="img-responsive" alt="" title="" />
                            </div>
                            <div class="logo-text text-upp">
                                Артекс
                            </div>
                        </div>
                        <div class="block-navbar-btn">
                            <ul class="navbar-btn text-upp">
                                <li class="hidden-xs">
                                    <a href="tel:<?=$phone?>" class="text-bold navbar-call phone-call"><?=$phone?></a>
                                </li>
                                <li class="click" data-target="callme">
                                    <span class="hidden-xs">Заказать звонок</span> <i class="icon icon-phone"></i>
                                </li>
                                <li class="click" data-target="price">
                                    <span class="hidden-xs">Узнать цену</span> <i class="icon icon-chat"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <div class="block block-intro">
            <img src="imgs/banners/<?=$intro?>" class="img-responsive" />
            <div class="block-intro-text">
                <div class="container">
                    <div class="intro-text-wrap">
                        <div class="intro-text">
                            <div class="intro-title text-bold text-upp"><?=$model?> на выгодных условиях</div>
                            <ul class="intro-profits text-upp">
                                <?php
                                   foreach($profit_list as $list){
                                       echo '<li>'.$list.'</li>';
                                   }
                                ?>
                            </ul>
                            <a class="btn bg-black text-upp click" href="javascript:void(0)" data-target="special-offer"><i class="icon icon-percent"></i>Получить спецпредложение</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-next hidden-xs" id="stock">
                <i class="icon icon-arrow-down"></i>
            </div>
        </div>
