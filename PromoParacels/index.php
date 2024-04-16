<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/animate.min.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/style.css">

    <link rel="apple-touch-icon" sizes="57x57" href="imgs/favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="imgs/favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="imgs/favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="imgs/favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="imgs/favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="imgs/favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="imgs/favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="imgs/favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="imgs/favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="imgs/favicons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="imgs/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="imgs/favicons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="imgs/favicons/favicon-16x16.png">
    <link rel="manifest" href="imgs/favicons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="imgs/favicons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <title>Медицинский центр Парацельс</title>

    <script src="http://api-maps.yandex.ru/2.1.17/?lang=ru_RU" type="text/javascript"></script>
    <script src="js/wow.min.js"></script>

    <script>

    var map;

    ymaps.ready(function() {
        map = new ymaps.Map('map', {
            center: [55.923579, 36.872887],
            zoom: 16,
            controls: ["zoomControl"]
        });

        map.behaviors.disable('scrollZoom');

        var myPlacemark1 = new ymaps.Placemark([55.923579, 36.872887], {},
            {preset: 'islands#redDotIcon'});
        map.geoObjects.add(myPlacemark1);

    });

    </script>

</head>
<body>

<div class="wrap">
    <div class="block-head">
    <div class="row">
        <div class="container-fluid">
            <div class="container">
            <div class="row">
                    <nav class="navbar navbar-expand-xl navbar-light w-100">
                        <a class="navbar-brand" href="#">
                            <img src="imgs/logo.png" alt="" title="" class="img-fluid">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="row justify-content-between w-100">
                                <div class="col-12 col-lg-auto text-center">
                                    <div class="menu-wrap">
                                    <span class="h5 text-uppercase">
                                        ЦЕНТР ДИАГНОСТИКИ МРТ Парацельс
                                    </span>
                                    <div class="row"><div class="col-12">г.Истра, ул.Маяковского 21с3</div></div>
                                    <div class="row">
                                        <div class="col">
                                            <ul class="navbar-nav mr-auto menu-click">
                                                <li class="nav-item nav-item-m">
                                                    <a class="nav-link nav-font" href="#services" id="services">Наши услуги</a>
                                                </li>
                                                <li class="nav-item nav-item-m">
                                                    <a class="nav-link nav-font" href="#we" id="we">Почему мы</a>
                                                </li>
                                                <li class="nav-item nav-item-m">
                                                    <a class="nav-link nav-font" href="#summ" id="summ">Стоимость</a>
                                                </li>
                                                <li class="nav-item nav-item-m">
                                                    <a class="nav-link nav-font" href="#app" id="app">Наше оборудование</a>
                                                </li>
                                                <li class="nav-item nav-item-m">
                                                    <a class="nav-link nav-font" href="#contact" id="contact">Контакты</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-auto navbar-text text-center">
                                    <a class="nav-tel" href="tel:+74959927877">+7 (495) 992-78-77</a> <br>
                                    <a class="nav-tel" href="tel:+74987293200">+7 (498) 729-32-00</a> <br />
                                    Ежедневно с 9:00 до 20:00
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
 <div class="block-call">
    <div class="container">
        <div class="row">
            <div class="col">
                <button type="button" class="btn-round btn-red btn-top text-white button float-right btn-scroll" data-form="form-top">
                    Заказать обратный звонок
                </button>
            </div>
        </div>
    </div>
 </div>

        <div class="block-banner">
                <div class="container"> 
                    <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 offset-xl-2 offset-ld-0">
                        <div class="banner-title">
                       <h2 class="text-uppercase">
                           Сверхточная диагностика любых заболеваний при помощи мрт в Истре и Истринском районе
                       </h2>
                        <span class="block-tooltip">
                            Вы получите точные результаты диагностики <br/>
                            и заключение врача
                        </span>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                    	<a name="form-top"></a>
                        <div class="block-form-wrap">
                            <div class="block-form">
                                <h4 class="text-uppercase text-center">
                                    Заполните заявку
                                </h4>
                                <form class="banner-form">
                                    <div class="form-item w-100">
                                        <i class="icon-form far fa-user"></i> <input class="form-input w-100" type="text" name="firstName" placeholder="Введите Ваше имя" />
                                    </div>
                                    <div class="form-item w-100">
                                        <i class="icon-form fas fa-mobile-alt"></i> <input class="form-input w-100 phone" type="tel" maxlength="12" name="phone" placeholder="Введите Ваш телефон" required/>
                                    </div>
                                    <div>
                                        <button type="submit" class="button form-btn btn-red text-uppercase text-white">Записаться</button>
                                    </div>
                                    <div class="text-center form-text">
                                        Мы гарантируем вам 100% конфиденциальность <br/>
                                        <i class="fas fa-lock text-dark"></i> ваши данные не будут переданы 3 лицам
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="block-advantage">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-lg-auto">
                                <div class="advantage-item text-center">
                                    <div class="advantage-img">
                                        <div class="icon-outborder d-inline-block">
                                            <i class="icon-advantage d-inline-block icon-rezult"></i>
                                        </div>
                                    </div>
                                    <div class="advantage-title">
                                        Точные и быстрые
                                        результаты
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-auto">
                                <div class="advantage-item text-center">
                                    <div class="advantage-img">
                                        <div class="icon-outborder d-inline-block">
                                        <i class="icon-advantage d-inline-block icon-spec"></i>
                                            </div>
                                    </div>
                                    <div class="advantage-title">
                                        Квалифицированные
                                        специалисты с
                                        большим опытом
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-auto">
                                <div class="advantage-item text-center">
                                    <div class="advantage-img">
                                        <div class="icon-outborder d-inline-block">
                                        <i class="icon-advantage d-inline-block icon-equipment"></i>
                                            </div>
                                    </div>
                                    <div class="advantage-title">
                                        Современное немецкое
                                        оборудование
                                        мощностью 1,5 тесла
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-auto">
                                <div class="advantage-item text-center">
                                    <div class="advantage-img">
                                        <div class="icon-outborder d-inline-block">
                                        <i class="icon-advantage d-inline-block icon-map"></i>
                                            </div>
                                    </div>
                                    <div class="advantage-title">
                                        Доступное месторасположение
                                        в центре г. Истра
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-auto">
                                <div class="advantage-item text-center">
                                    <div class="advantage-img">
                                        <div class="icon-outborder d-inline-block">
                                        <i class="icon-advantage d-inline-block icon-oms"></i>
                                            </div>
                                    </div>
                                    <div class="advantage-title">
                                        Обслуживаем
                                        пациентов
                                        по полисам ОМС
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    <a name="services"></a>
        <div class="block-diagnostics wow fadeInUp">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="text-uppercase head-border">
                            Центр МРТ парацельс поможет вам получить самые точные результаты диагностики
                        </h2>
                        <p>
                            Любых видов заболеваний без направления врача
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 order-sm-2 order-2 order-lg-1">
                        <div class="block-tab"></div>
                    </div>
                    <div class="col-lg-4 col-md-2 col-sm-2 d-none d-xl-block order-lg-2">
                        <img src="imgs/human2.png" class="human-abs" alt="" title="" />
                        <div class="rounded-circle btn-red coord woman head" data-tab="head"></div>
                        <div class="rounded-circle btn-red coord man head" data-tab="head"></div>
                        <div class="rounded-circle btn-red coord woman neck" data-tab="neck"></div>
                        <div class="rounded-circle btn-red coord man neck" data-tab="neck"></div>
                        <div class="rounded-circle btn-red coord woman abdomen" data-tab="abdomen"></div>
                        <div class="rounded-circle btn-red coord man abdomen" data-tab="abdomen"></div>
                        <div class="rounded-circle btn-red coord woman pelvis" data-tab="pelvis"></div>
                        <div class="rounded-circle btn-red coord man pelvis" data-tab="pelvis"></div>
                        <div class="rounded-circle btn-red coord woman hands" data-tab="hands"></div>
                        <div class="rounded-circle btn-red coord man hands" data-tab="hands"></div>
                        <div class="rounded-circle btn-red coord woman foot" data-tab="foot"></div>
                        <div class="rounded-circle btn-red coord man foot" data-tab="foot"></div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 order-sm-1 order-1 order-lg-3">
                        <div class="tab-mrt-check">
                            <input type="radio" name="tab-mrt" id="head" value="head" class="d-none" checked/>
                            <label for="head" class="text-uppercase">МРТ В ОБЛАСТИ ГОЛОВЫ</label>
                        </div>
                        <div class="tab-mrt-check">
                            <input type="radio" name="tab-mrt" id="neck" class="d-none" value="neck"/>
                            <label for="neck" class="text-uppercase">МРТ В ОБЛАСТИ ПОЗВОНОЧНИКА И ШЕИ</label>
                        </div>
                        <div class="tab-mrt-check">
                            <input type="radio" name="tab-mrt" class="d-none" id="abdomen" value="abdomen"/>
                            <label for="abdomen" class="text-uppercase">МРТ ОБЛАСТИ БРЮШНОЙ ПОЛОСТИ</label>
                        </div>
                        <div class="tab-mrt-check">
                            <input type="radio" name="tab-mrt" class="d-none" id="pelvis" value="pelvis"/>
                            <label for="pelvis" class="text-uppercase">МРТ В ОБЛАСТИ МАЛОГО ТАЗА</label>
                        </div>
                        <div class="tab-mrt-check">
                            <input type="radio" name="tab-mrt" class="d-none" id="hands" value="hands"/>
                            <label for="hands" class="text-uppercase">МРТ В ОБЛАСТИ ВЕРХНИХ КОНЕЧНОСТЕЙ</label>
                        </div>
                        <div class="tab-mrt-check">
                            <input type="radio" name="tab-mrt" class="d-none" id="foot" value="foot"/>
                            <label for="foot" class="text-uppercase">МРТ В ОБЛАСТИ НИЖНИХ КОНЕЧНОСТЕЙ</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <button class="btn-diagnostics button btn-red text-white btn-scroll" data-form="form-precision">
                            Звоните, наши специалисты подскажут какое обследование нужно именно Вам!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    <a name="we"></a>
      <div class="block-survey text-white wow fadeInUp">
          <div class="container">
          <div class="row">
              <div class="col-12 text-center">
                  <h2 class="text-uppercase head-border">
                      ОБСЛЕДОВАНИЕ В ЦЕНТРЕ <br/> <span class="head-medium">МРТ ПАРАЦЕЛЬС</span>
                  </h2>
                  <p>
                      Магнитно-резонансная томография (МРТ) - один из самых информативных <br/>
                      и безопасных современных методов диагностики.
                  </p>
              </div>
          </div>
          <div class="row">
              <div class="col-12 text-center">
                  <span class="badge badge-pill survey-tooltip d-inline-block">
                      В нашей клинике вы сможете сделать МРТ (магнитно-резонансную томографию)
                        на современном немецком оборудовании мощностью 1,5 тесла
                  </span>
              </div>
          </div>
          <div class="row text-white text-center survey-wrap">
              <div class="col-lg-4 col-sm-6 col-xs-12">
                  <div class="survey-item d-inline-block">
                      <div class="survey-img d-flex align-items-center justify-content-center">
                          <i class="d-inline-block icon-rezult-mrt"></i>
                      </div>
                      <div class="survey-title text-uppercase d-flex align-items-center justify-content-center">
                          Результаты <br/>МРТ
                      </div>
                      <div class="survey-text">
                          Результаты МРТ и заключения наших МРТ экспертов, полученные в нашей клинике,
                          принимают во всех частных и
                          государственных консультативных центрах,
                          стационарах, госпиталях и больницах.
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-xs-12">
                  <div class="survey-item d-inline-block">
                      <div class="survey-img d-flex align-items-center justify-content-center">
                          <i class="d-inline-block icon-snapshot"></i>
                      </div>
                      <div class="survey-title text-uppercase d-flex align-items-center justify-content-center">
                          высокое качество <br/> снимков
                      </div>
                      <div class="survey-text">
                          Наше оборудование позволяет получать
                          снимки очень высокого качества,
                          удовлетворяющие специалистов всех
                          профилей! При этом снимки Вы можете
                          получить в любом формате, как
                          распечатанные так и на цифровом носителе.
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-xs-12">
                  <div class="survey-item d-inline-block">
                      <div class="survey-img d-flex align-items-center justify-content-center">
                          <i class="d-inline-block icon-siemens"></i>
                      </div>
                      <div class="survey-title text-uppercase d-flex align-items-center justify-content-center">
                          новое современное <br/>оборудование
                      </div>
                      <div class="survey-text">
                          Мы используем современное безопасное
                          немецкое оборудование всемирно известной
                          марки Siemens, мощностью 1,5 тесла, которое
                          позволяет получать сверхточные показания
                          диагностики!
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-xs-12">
                  <div class="survey-item d-inline-block">
                      <div class="survey-img d-flex align-items-center justify-content-center">
                          <i class="d-inline-block icon-tomograf"></i>
                      </div>
                      <div class="survey-title text-uppercase d-flex align-items-center justify-content-center">
                          томограф <br/>закрытого типа
                      </div>
                      <div class="survey-text">
                          Изображения, полученные на томографе
                          закрытого типа, максимально четкие
                          и достоверные. Данный вид томографа
                          позволяет проводить диагностику любой сложности.
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-xs-12">
                  <div class="survey-item d-inline-block">
                      <div class="survey-img d-flex align-items-center justify-content-center">
                          <i class="d-inline-block icon-best"></i>
                      </div>
                      <div class="survey-title text-uppercase d-flex align-items-center justify-content-center">
                          лучшие <br/>специалисты города
                      </div>
                      <div class="survey-text">
                          Наши специалисты имеют огромный опыт в
                          медицине и помогут Вам
                          продиагностировать любой недуг, а самое
                          главное выявить его причину на ранней
                          стадии.
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-xs-12">
                  <div class="survey-item d-inline-block">
                      <div class="survey-img d-flex align-items-center justify-content-center">
                          <i class="d-inline-block icon-security"></i>
                      </div>
                      <div class="survey-title text-uppercase d-flex align-items-center justify-content-center">
                          безопасно
                      </div>
                      <div class="survey-text">
                          Обследование МРТ - абсолютно безопасная
                          процедура, которую рекомендуется проходить
                          как минимум 1 раз в месяц, ведь ранняя
                          диагностика - залог Вашего здоровья!
                      </div>
                  </div>
              </div>
          </div>
              </div>
      </div>
    <div class="block-precision">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 offset-lg-2 offset-md-0">
                    <div class="banner-title">
                        <h2 class="text-uppercase">
                            Сверхточная диагностика любых заболеваний при помощи мрт в Истре и Истринском районе
                        </h2>
                        <span class="block-tooltip">
                            Вы получите точные результаты диагностики <br/>
                            и заключение врача
                        </span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                	<a name="form-precision"></a>
                    <div class="block-form-wrap">
                        <div class="block-form">
                            <h4 class="text-uppercase text-center">
                                Заполните заявку
                            </h4>
                            <form class="banner-form">
                                <div class="form-item w-100">
                                    <i class="icon-form far fa-user"></i> <input class="form-input w-100" type="text" name="firstName" placeholder="Введите Ваше имя" />
                                </div>
                                <div class="form-item w-100">
                                    <i class="icon-form fas fa-mobile-alt"></i> <input class="form-input w-100 phone" type="tel" maxlength="12" name="phone" placeholder="Введите Ваш телефон" required/>
                                </div>
                                <div>
                                    <button type="submit" class="button form-btn btn-red text-uppercase text-white">Записаться</button>
                                </div>
                                <div class="text-center form-text">
                                    Мы гарантируем вам 100% конфиденциальность <br/>
                                    <i class="fas fa-lock text-dark"></i> ваши данные не будут переданы 3 лицам
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a name="summ"></a>
    <div class="block-sum wow fadeInUp">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-uppercase text-center">
                        ВЫ МОЖЕТЕ РАСсЧИТАТЬ стоимость <br/> обследования в медцентре «Парацельс»
                    </h2>
                </div>
            </div>
            <div class="row">
            <div class="col-lg-2 offset-lg-3 d-none d-lg-block gender-img">
                <div class="d-inline-block">
                    <img src="imgs/man.png" alt="" title=""/>
                    <div class="coord-sum"></div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 offset-lg-1 offset-md-0">

                <div class="sum-elem">
                    <p class="h6 text-uppercase">
                        Выберите пол
                    </p>
                    <div class="gender-wrap">
                        <div class="d-inline-block">
                            <input type="radio" class="d-none" name="gender" id="gender-man" value="man" checked/>
                            <label for="gender-man" class="gender badge badge-pill d-flex align-items-center justify-content-center">Мужчина</label>
                        </div>
                        <div class="d-inline-block">
                            <input type="radio" class="d-none" name="gender" id="gender-woman" value="woman"/>
                            <label for="gender-woman" class="gender badge badge-pill d-flex align-items-center justify-content-center">Женщина</label>
                        </div>
                    </div>
                    </div>

                    <div class="sum-elem">
                        <label for="sum-field" class="h6 text-uppercase d-block">
                            Выберите область <br/>
                            обследования
                        </label>
                        <div class="select-elem d-inline-block">
                            <select class="field-select badge badge-pill" id="sum-field">
                                <option value="">Выберите область</option>
                            </select>
                            <i class="fas fa-angle-down icon-select"></i>
                        </div>
                    </div>
                <div class="sum-elem">
                    <label for="view-sum" class="h6 text-uppercase d-block">
                        Выберите вид <br/>
                        диагностики
                    </label>
                    <div class="select-elem d-inline-block">
                        <select class="field-select badge badge-pill" id="view-sum">
                            <option value="">Выберите вид</option>
                        </select>
                        <i class="fas fa-angle-down icon-select"></i>
                    </div>
                </div>
                <div class="sum-elem">
                    <label for="survey-sum" class="h6 text-uppercase d-block">
                        Стоимость <br/>
                        обследования
                    </label>
                    <span class="survey-sum" id="survey-sum"></span>
                </div>
            </div>
            </div>
            <div class="sum-survey-wrap text-center">
            <div class="row">
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="sum-survey-item d-inline-block">
                            <div class="survey-item-icon">
                               <img src="imgs/icons/calculation/icon1.png" alt="" title="" />
                            </div>
                            <div class="survey-item-title">
                                Точные результаты <br/>
                                обследования
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="sum-survey-item d-inline-block">
                            <div class="survey-item-icon">
                                <img src="imgs/icons/calculation/icon2.png" alt="" title="" />
                            </div>
                            <div class="survey-item-title">
                                Заключение <br/>
                                врача на месте
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="sum-survey-item d-inline-block">
                            <div class="survey-item-icon">
                                <img src="imgs/icons/calculation/icon3.png" alt="" title="" />
                            </div>
                            <div class="survey-item-title">
                                Высокое качество <br/>
                                снимков
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="sum-survey-item d-inline-block">
                            <div class="survey-item-icon">
                                <img src="imgs/icons/calculation/icon4.png" alt="" title="" />
                            </div>
                            <div class="survey-item-title">
                                Консультация <br/>
                                врача
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="block-call-bottom text-center">
        <div class="container">
            <div class="row">
                <div class="col">
                    <button class="badge badge-pill button btn-red call-bottom text-white btn-scroll" data-form="form-7">
                        Записаться на обследование
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="block-work wow fadeInUp">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-uppercase text-center">
                        Как мы работаем
                    </h2>
                </div>
            </div>
            <div class="block-work-wrap text-center">
                <div class="row">
                    <div class="col-lg-auto col-sm-6 col-12">
                        <div class="work-item d-inline-block">
                            <div class="work-img">
                                <img src="imgs/icons/work/icon1.png" alt="" title="">
                            </div>
                            <div class="work-title">
                                Вы звоните по номеру
                                <a href="tel:+74959927877" class="text-dark">+7 (495) 992-78-77</a>
                                или заполняете заявку
                                на сайте
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-auto d-none d-xl-block">
                        <div class="work-append icon-left">
                            <i class="icon-append d-inline-block"></i>
                        </div>
                    </div>
                    <div class="col-lg-auto col-sm-6 col-12">
                        <div class="work-item d-inline-block">
                            <div class="work-img">
                                <img src="imgs/icons/work/icon2.png" alt="" title="">
                            </div>
                            <div class="work-title">
                                Наш специалист
                                связывается с Вами
                                в течении 10 минут
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-auto col-12 d-none d-xl-block">
                        <div class="work-append icon-bottom">
                            <i class="icon-append d-inline-block"></i>
                        </div>
                    </div>
                    <div class="col-lg-auto col-sm-6 col-12">
                        <div class="work-item d-inline-block">
                            <div class="work-img">
                                <img src="imgs/icons/work/icon3.png" alt="" title="">
                            </div>
                            <div class="work-title">
                                Уточняем время
                                проведения
                                обследования
                                удобное для Вас
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-auto d-none d-xl-block">
                        <div class="work-append icon-right">
                            <i class="icon-append d-inline-block"></i>
                        </div>
                    </div>
                    <div class="col-lg-auto col-sm-6 col-12">
                        <div class="work-item d-inline-block">
                            <div class="work-img">
                                <img src="imgs/icons/work/icon4.png" alt="" title="">
                            </div>
                            <div class="work-title">
                                Проводим МРТ
                                обследование в
                                назначенное время
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-auto d-none d-xl-block">
                        <div class="work-append icon-bottom">
                            <i class="icon-append d-inline-block"></i>
                        </div>
                    </div>
                    <div class="col-lg-auto col-sm-6 col-12">
                        <div class="work-item d-inline-block">
                            <div class="work-img">
                                <img src="imgs/icons/work/icon5.png" alt="" title="">
                            </div>
                            <div class="work-title">
                                Вы получаете
                                результаты диагностики
                                и заключение врача
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="work-call-btn-wrap">
                <div class="row">
                    <div class="col">
                        <button class="badge badge-pill button btn-red text-white work-call-btn btn-scroll" data-form="form-7">
                            Заказать звонок
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="block-receiving wow fadeInUp">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-uppercase text-center">
                        Что вы получите пройдя обследование <br/>
                        в нашем центре
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 receiving-img">
                    <img src="imgs/list.png" alt="" title="" class="img-fluid" >
                </div>
                <div class="col-lg-5 col-md-12 col-sm-12 offset-lg-1 offset-md-0">
                    <ul class="list-unstyled text-uppercase receiving-list text-center">
                        <li>
                            Ранняя диагностика поможет вам
                            избежать серьезных проблем со
                            здоровьем
                        </li>
                        <li>
                            Точные данные обследования помогут
                            вам найти и устранить саму причину
                            заболевания
                        </li>
                        <li>
                            Результаты обследования помогут
                            вашему лечащему врачу назначить
                            правильное и эффективное лечение
                        </li>
                    </ul>
                    <div class="receiving-tooltip text-white">
                        Самое главное Вы получаете заключение
                        опытного специалиста, профессионала
                        своего дела - врача-рентгенолога
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="block-bottom wow fadeInUp">
    <div class="block-7">
        <div class="container">
            <div class="row"> 
                <div class="col-lg-6 col-md-12 col-sm-12 offset-lg-2 offset-md-0">
                    <div class="banner-title">
                        <h2 class="text-uppercase">
                            Сверхточная диагностика любых заболеваний при помощи мрт в Истре и Истринском районе
                        </h2>
                        <span class="block-tooltip">
                            Вы получите точные результаты диагностики <br/>
                            и заключение врача
                        </span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                	<a name="form-7"></a>
                    <div class="block-form-wrap">
                        <div class="block-form">
                            <h4 class="text-uppercase text-center">
                                Заполните заявку
                            </h4>
                            <form class="banner-form">
                                <div class="form-item w-100">
                                    <i class="icon-form far fa-user"></i> <input class="form-input w-100" type="text" name="firstName" placeholder="Введите Ваше имя" />
                                </div>
                                <div class="form-item w-100">
                                    <i class="icon-form fas fa-mobile-alt"></i> <input class="form-input w-100 phone" type="tel" maxlength="12" name="phone" placeholder="Введите Ваш телефон" required/>
                                </div>
                                <div>
                                    <button type="submit" class="button form-btn btn-red text-uppercase text-white">Записаться</button>
                                </div>
                                <div class="text-center form-text">
                                    Мы гарантируем вам 100% конфиденциальность <br/>
                                    <i class="fas fa-lock text-dark"></i> ваши данные не будут переданы 3 лицам
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a name="app"></a>
    <div class="block-equipment wow fadeInUp">
        <div class="container">
            <div class="equipment-wrap">
                <div class="row">
                    <h2 class="text-uppercase text-center">
                        Современное сверхточное немецкое <br/>
                        оборудование медцентра «Парацельс» г. истра
                    </h2>
                </div>
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <div class="equipment-img">
                            <img src="imgs/apparat.png" alt="" title="" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <h4 class="text-uppercase equipment-name text-white">
                            Siemens 1.5T
                        </h4>
                        <div>
                            Мы используем современное оборудование известной
                            немецкой марки Siemens - это высокопольный магнитно-
                            резонансный томограф на основе использования
                            сверхпроводящего магнита с напряженностью поля 1,5 тесла.
                        </div>
                        <div class="equipment-select">
                            Новый современный томограф позволяет исследовать практически все внутренние органы, ткани и структуры организма с исключительной точностью изображения и высокой скоростью.
                        </div>
                        <ul class="list-unstyled equipment-list text-uppercase">
                            <li class="d-flex align-items-center">
                                <i class="icon-equipment-app icon-quality d-inline-block"></i>
                                Настоящее немецкое качество
                                и точность показаний
                            </li>
                            <li class="d-flex align-items-center">
                                <i class="icon-license icon-equipment-app d-inline-block"></i>
                                Оборудование лицензировано и
                                полностью безопасно
                            </li>
                            <li class="d-flex align-items-center pt-2">
                                <i class="icon-readings icon-equipment-app d-inline-block"></i>
                                Сверхточные показания диагностики
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="block-licenses text-center wow fadeInUp">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div data-toggle="modal" data-target="#modal-li" class="modal-li d-inline-block">
                        <img src="imgs/licenses/li_1.jpg" width="290" alt="" title="" class="img-fluid">
                    </div>
                </div>
                <div class="col">
                    <div data-toggle="modal" data-target="#modal-li" class="modal-li d-inline-block">
                        <img src="imgs/licenses/li_2.jpg" width="290" alt="" title="" class="img-fluid">
                    </div>
                </div>
                <div class="col">
                    <div data-toggle="modal" data-target="#modal-li" class="modal-li d-inline-block">
                        <img src="imgs/licenses/li_3.jpg" width="290" alt="" title="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a name="contact"></a>
    <div class="block-contacts wow fadeInUp">
        <div id="map"></div>

    <div class="block-contacts-info">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-md-12 col-sm-12 offset-xl-9 offset-ld-0">
                    <div class="contacts-wrap d-inline-block">
                        <div class="contacts text-white">
                            <div class="contacts-info">
                                <div class="contacts-item">
                                    <p class="contacts-title">
                                        Наши телефоны:
                                    </p>
                                    <a href="tel:+74959927877" class="text-white">8 (495) 992-78-77</a> <br/>
                                    <a href="tel:+74987293200" class="text-white">8 (498) 729-32-00</a>
                                </div>
                                <div class="contacts-item">
                                    <p class="contacts-title">
                                        Адрес:
                                    </p>
                                    <span>г.Истра, ул.Маяковского 21с3</span>
                                </div>
                                <div class="contacts-item">
                                    <p class="contacts-title">
                                        Мы работаем:
                                    </p>
                                    <span>ежедневно с 9.00 до 20.00 без выходных и праздничных дней.</span>
                                </div>
                                <div class="contacts-item">
                                    
                                    <span>
                                        На территории нашего центра действует бесплатная парковка для наших пациентов
                                    </span>
                                </div>
                                <div class="text-center">
                                    <button class="button btn-red badge badge-pill text-white btn-map btn-scroll" data-form="form-7">Остались вопросы?</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
    <div class="block-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <img src="imgs/logo.png" alt="" title="" class="mt-3 img-fluid">
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 offset-lg-6 offset-md-0 footer-contacts text-center">
                    По всем вопросам звоните: <br/>
                    <a href="tel:+74959927877" class="footer-tel">+7 (495) 992-78-77</a> <br />
                    <a href="tel:+74987293200" class="footer-tel">+7 (498) 729-32-00</a> <br />
                    <button type="button" class="btn-round btn-red btn-top text-white button mt-2 btn-scroll" data-form="form-7">
                        Заказать обратный звонок
                    </button>
                </div>
            </div>
        </div>
    </div>

<!-- Modal -->

<div class="modal fade" id="modal-li" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    	<div class="modal-content ">
    		<div class="text-right">
    	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
    		<span aria-hidden="true">&times;</span>
        </button>
        </div>
    	<div class="li-content text-center">
    		<div class="d-inline-block li-img"></div>
    	</div>
    </div>
  </div>
</div>

    <div class="modal" tabindex="-1" role="dialog" id="message">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Ваша заявка успешно отправлена</p>
                </div>
            </div>
        </div>
    </div>

</div>

<script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="js/scripts.js"></script>
<script src="js/filter.js"></script>
<script src="js/wow.min.js"></script>
<script>
    new WOW().init();
</script>

</body>
</html>