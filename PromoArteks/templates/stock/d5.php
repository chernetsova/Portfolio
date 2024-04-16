<?php
    foreach($d5 as $k=>$v){
?>
<div class="stock-item">
    <div class="stock-img">
        <img src="imgs/colors/d5/<?=$d5[$k]["color"]?>.png" class="img-responsive" alt="" title="" />
    </div>
    <div class="stock-info">
        <div class="stock-title text-upp text-bold">
            <span><?=$d5[$k]["title"]?></span> <br />
            <span><?=$d5[$k]["series"]?></span>
        </div>
        <div class="block-stock-info-list">
            <table class="stock-info-list">
                <tbody>
                    <tr>
                        <td>Год:</td>
                        <td><?=$d5[$k]["year"]?></td>
                    </tr>
                    <tr>
                        <td>Цвет:</td>
                        <td><i class="icon icon-color <?=$d5[$k]["color"]?>"></i>&#8195;<?=str_replace("-", " ", $d5[$k]["color"])?></td>
                    </tr>
                    <tr>
                        <td>Преимущество:</td>
                        <td><?=$d5[$k]["privilege"]?></td>
                    </tr>
                    <tr>
                        <td>Телефон:</td>
                        <td><?=$phone?></td>
                    </tr>
                </tbody>
            </table>
            <a href="javascript:void(0)" class="btn bg-black text-upp click" data-target="special-offer">Получить спецпредложение</a>
        </div>
    </div>
</div>
<?
}
?>
