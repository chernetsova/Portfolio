<?php
    foreach($rr as $k=>$v){
?>
<div class="stock-item">
    <div class="stock-img">
        <img src="imgs/colors/rr/<?=$rr[$k]["color"]?>.png" class="img-responsive" alt="" title="" />
    </div>
    <div class="stock-info">
        <div class="stock-title text-upp text-bold">
            <span><?=$rr[$k]["title"]?></span> <br />
            <span><?=$rr[$k]["series"]?></span>
        </div>
        <div class="block-stock-info-list">
            <table class="stock-info-list">
                <tbody>
                    <tr>
                        <td>Год:</td>
                        <td><?=$rr[$k]["year"]?></td>
                    </tr>
                    <tr>
                        <td>Цвет:</td>
                        <td><i class="icon icon-color <?=$rr[$k]["color"]?>"></i>&#8195;<?=str_replace("-", " ", $rr[$k]["color"])?></td>
                    </tr>
                    <tr>
                        <td>Преимущество:</td>
                        <td><?=$rr[$k]["privilege"]?></td>
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