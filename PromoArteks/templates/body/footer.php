<div class="block">
    <div class="map block" id="map"></div>
    <div class="block-balloon">
        <div class="container">
            <div class="balloon-wrap">
                <div class="balloon-container">
                    <div class="balloon-title text-bold text-upp">
                        Артекс <br />Land Rover
                    </div>
                    <div class="balloon-info-wrap">
                        <div class="balloon-info">
                            <p>МКАД 60 км (внутренняя сторона), владение 4 А</p>
                            <p>
                                Режим работы: <br/>
                                пн.- пт. 8.00 - 22.00<br/>
                                сб.- вс. 9.00 - 21.00
                            </p>
                            <p>
                                <a href="tel:<?=$phone?>" class="text-bold navbar-call"><?=$phone?></a>
                            </p>
                        </div>
                    </div>
                     <a href="javascript:void(0)" class="btn bg-black text-upp click" data-target="callme"><i class="icon icon-phone"></i>Заказать звонок</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="block block-disksman">
    <div class="container">
        <div class="disksman-wrap">
            <div>
                <span class="disksman-dealer">&copy;&emsp;ООО «Ягуар Ленд Ровер» 2016</span> <span>&copy;&emsp;ООО Права на сайт принадлежат «Артекс Land Rover». Правовая информация.</span>
                    <p>
                    Нажав кнопку «Заказать звонок», «Задать вопрос», «Записаться на тест-драйв», «Рассчитать стоимость», «Получить спецпредложение», я даю согласие на обработку моих персональных данных и получение рекламы. С условиями обработки персональных данных и получения рекламы, изложенными на сайте адрес сайта (Согласие на обработку персональных данных и получение рекламы) — ознакомлен и согласен.
                </p>
                    <?php
                        foreach($disksman as $disks){
                            echo '<p>'.$disks.'</p>';
                         }
                    ?>
                <p>
                    Обращаем Ваше внимание на то, что вся представленная на сайте информация, касающаяся комплектаций, технических характеристик, цветовых сочетаний, а также стоимости автомобилей и сервисного обслуживания носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации. Для получения подробной информации, пожалуйста, обращайтесь в наш салон.
                </p>
            </div>
            <div>
                <p>
                    <img src="imgs/logo_lr.png" alt="" title="" />
                </p>
            </div>
        </div>
    </div>
</div>
<div class="btn-top text-upp fixed">
    <i class="icon icon-arrow-up"></i> Наверх
</div>

<?/*-------------- Modals --------------*/?>

<div class="modal fixed" id="callme">
    <div class="modal-form-wrap">
        <div class="btn-close">
            <i class="icon icon-close"></i>
        </div>
        <div class="modal-form">
            <div class="title text-bold text-upp">
                Заказать обратный звонок
            </div>
            <div class="title-info">
                Заполните форму и мы Вам обязательно перезвоним!
            </div>
            <div class="form-modal">
                <form>
                    <div class="form-field">
                        <div class="field-title">
                           Ваше имя: 
                        </div>
                        <input name="first-name" class="field" type="text" />
                    </div>
                    <div class="form-field">
                        <div class="field-title">
                           Контактный телефон: 
                        </div>
                        <input name="phone" class="field phone" maxlength="12" type="tel" placeholder="+7XXXXXXXXXX"/>
                    </div>
                    <input name="form-title" type="hidden" />
                    <input type="hidden" name="url" value="<?php echo $_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];?>" />
                    <div class="form-field form-btn">
                        <button type="submit" class="btn bg-black text-upp"><i class="icon icon-phone"></i>Заказать звонок</button>
                    </div>
               </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fixed" id="question">
    <div class="modal-form-wrap">
        <div class="btn-close">
            <i class="icon icon-close"></i>
        </div>
        <div class="modal-form">
            <div class="title text-bold text-upp">
                Задать вопрос
            </div>
            <div class="title-info">
                Заполните форму и мы Вам обязательно перезвоним!
            </div>
            <div class="form-modal">
                <form>
                    <div class="form-field">
                        <div class="field-title">
                           Ваше имя: 
                        </div>
                        <input name="first-name" class="field" type="text" />
                    </div>
                    <div class="form-field">
                        <div class="field-title">
                           Контактный телефон: 
                        </div>
                        <input name="phone" class="field phone" maxlength="12" type="tel" placeholder="+7XXXXXXXXXX"/>
                    </div>
                    <div class="form-field">
                        <div class="field-title">
                           Ваш вопрос: 
                        </div>
                        <textarea name="question" class="field"></textarea>
                    </div>
                    <input name="form-title" type="hidden" />
                    <input type="hidden" name="url" value="<?php echo $_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];?>" />
                    <div class="form-field form-btn">
                        <button type="submit" class="btn bg-black text-upp"><i class="icon icon-phone"></i>Задать вопрос</button>
                    </div>
               </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fixed" id="price">
    <div class="modal-form-wrap">
        <div class="btn-close">
            <i class="icon icon-close"></i>
        </div>
        <div class="modal-form">
            <div class="title text-bold text-upp">
                Узнать цену
            </div>
            <div class="title-info">
                Заполните форму и мы Вам обязательно перезвоним!
            </div>
            <div class="form-modal">
                <form>
                    <div class="form-field">
                        <div class="field-title">
                           Ваше имя: 
                        </div>
                        <input name="first-name" class="field" type="text" />
                    </div>
                    <div class="form-field">
                        <div class="field-title">
                           Контактный телефон: 
                        </div>
                        <input name="phone" class="field phone" maxlength="12" type="tel" placeholder="+7XXXXXXXXXX"/>
                    </div>
                    <input name="form-title" type="hidden" />
                    <input type="hidden" name="url" value="<?php echo $_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];?>" />
                    <div class="form-field form-btn">
                        <button type="submit" class="btn bg-black text-upp"><i class="icon icon-chat"></i>Узнать цену</button>
                    </div>
               </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fixed" id="special-offer">
    <div class="modal-form-wrap">
        <div class="btn-close">
            <i class="icon icon-close"></i>
        </div>
        <div class="modal-form">
            <div class="title text-bold text-upp">
                Узнать условия спецпредложения
            </div>
            <div class="title-info">
                Заполните форму и мы Вам обязательно перезвоним!
            </div>
            <div class="form-modal">
                <form>
                    <div class="form-field">
                        <div class="field-title">
                           Ваше имя: 
                        </div>
                        <input name="first-name" class="field" type="text" />
                    </div>
                    <div class="form-field">
                        <div class="field-title">
                           Контактный телефон: 
                        </div>
                        <input name="phone" class="field phone" maxlength="12" type="tel" placeholder="+7XXXXXXXXXX"/>
                    </div>
                    <input name="form-title" type="hidden" />
                    <input type="hidden" name="url" value="<?php echo $_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];?>" />
                    <div class="form-field form-btn">
                        <button type="submit" class="btn bg-black text-upp">Получить спецпредложение</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fixed" id="message">
    <div class="modal-form-wrap">
        <div class="title-info">
               Заявка успешно отправлена
         </div>
    </div>
</div>

</div>

    <script src="js/jquery-2.0.0.js"></script>
    <script src="js/scripts.js"></script>

    </body>
    </html>
