<div class="block block-service-package">
    <div class="container">
        <div class="h1 text-bold text-upp"><?=$service_package_title?></div>
        <div class="block-service-list">
            <p>
                <b>5 лет технического обслуживания на уникальных условиях <sup>***</sup></b>
            </p>
            <ul class="intro-service">
                <?php
                     foreach($service_package as $list){
                          echo '<li><i class="icon icon-bull"></i>'.$list.'</li>';
                     } 
               ?>
            </ul>
            <p>Подробности у официального дилера.</p>
        </div>
    </div>
</div>
<div class="block block-stock-title">
    <a name="stock"></a>
    <div class="container">
        <div class="h1 text-bold text-upp">Специальное предложение по моделям</div>
    </div>
</div>
<div class="block block-stock">
    <div class="container">
        <div class="stock-wrap">
            <? include 'templates/stock/'.$stock ?>
        </div>
    </div>
    <div class="title text-bold text-upp">Узнайте цену на другие авто в наличии</div>
    <div class="block-btn-cost">
        <a href="javascript:void(0)" class="btn bg-black text-upp click" data-target="price">Узнать цену</a>
    </div>
</div>
<div class="block block-offer">
    <div class="container">
        <div class="offer-wrap">
            <div class="offer-info">
                <div class="offer-catchword text-bold text-upp">
                    Больше привилегий
                </div>
                <div class="offer-title title text-bold text-upp">
                    <?=$title_tradein?>
                </div>
                <div class="offer-text">
                    <?=$text_tradein?>
                </div>
                <a href="javascript:void(0)" class="btn bg-black text-upp click" data-target="callme"><i class="icon icon-sum"></i>Расчитать стоимость</a>
            </div>
            <div class="offer-img">
                <img src="imgs/banners/<?=$banner_tradein?>/tradein.jpg" class="img-responsive" alt="" title="" />
            </div>          
        </div>
    </div>
</div>
<div class="block block-advantage">
    <div class="container">
        <div class="h1 text-bold text-upp">
            Преимущества покупки в Артекс
        </div>
        <div class="advantage-wrap hidden-xs">
            <div class="advantage-title">
                Официальный дилер Lаnd&nbsp;Rover Артекс с&nbsp;большой программой лояльности и поддержкой.
            </div>
            <div class="advantage-text">
                <p>
                    Официальный дилер Land Rover АРТЕКС является одним из лидеров в области продажи и технического обслуживания автомобилей британской марки в России. 
                </p>
                <p>
                    Помимо полного комплекса услуг, связанных с покупкой и эксплуатацией автомобиля, автоцентр предлагает большое количество специальных кредитных и лизинговых программ, страховых продуктов, а программа Trade-in и программа Land Rover Approved помогут совершить покупку максимально привлекательно и удобно. 
                </p>
            </div>
        </div>
        <div class="advantage-numb">
            <div class="advantage-item">
                <div class="numb text-bold">
                    01
                </div>
                <div class="numb-title text-upp">
                    Продажа автомобилей с преимуществом
                </div>
            </div>
            <div class="advantage-item">
                <div class="numb text-bold">
                    02
                </div>
                <div class="numb-title text-upp">
                    Полное гарантийное обслуживание купленных автомобилей
                </div>
            </div>
            <div class="advantage-item">
                <div class="numb text-bold">
                    03
                </div>
                <div class="numb-title text-upp">
                    Большое количество автомобилей в наличии
                </div>
            </div>
        </div>
        <a href="javascript:void(0)" class="btn bg-white text-upp click" data-target="callme"><i class="icon icon-phone"></i>Заказать звонок</a>
    </div>
</div>
<div class="block block-offer">
    <div class="container">
        <div class="offer-wrap">
            <div class="offer-info">
                <div class="offer-catchword text-bold text-upp">
                    Больше преимуществ
                </div>
                <div class="offer-title title text-bold text-upp">
                    <?=$credit_title?>
                </div>
                <div class="offer-text">
                    <?=$credit_text?>
                </div>
                <a href="javascript:void(0)" class="btn bg-black text-upp click" data-target="callme"><i class="icon icon-sum"></i>Расчитать стоимость</a>
            </div>
            <div class="offer-img">
                <img src="imgs/banners/<?=$banner_credit?>/credit.jpg" class="img-responsive" alt="" title="" />
            </div>          
        </div>
    </div>
</div>
<div class="block block-writein">
    <div class="container">
        <div class="h1 text-bold text-upp">
            Запишитесь на тест-драйв
        </div>
        <div class="writein-wrap">
            <div class="writein-info">
                <div class="writein-title">
                Выберите любое удобное для вас время и место для пробной поездки!
                </div>
                <div class="writein-text">
                    Не упустите возможность стать владельцем Land Rover 2016 модельного года на уникальных условиях! Запишитесь на тест-драйв уже сегодня.
                </div>
            </div>
            <div class="writein-form">
                <a href="javascript:void(0)" class="btn bg-black text-upp click" data-target="callme"><i class="icon icon-drive"></i>Записаться на тест-драйв</a>
            </div>
        </div>
    </div>
</div>