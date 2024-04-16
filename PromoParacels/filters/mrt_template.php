<?php

include '../data/mrt.php';

$mrt = ${$_POST['mrt']};

foreach ($mrt as $k=>$v){
    echo '
     <div class="tab-info">
                                <h5 class="text-uppercase mb-1">'.$mrt[$k]['title'].'</h5>
                                <p class="sub-h">Возможные симптомы:</p>
                                <ul class="list-unstyled tab-list">';
                                    foreach($mrt[$k]['symptoms'] as $symptoms){
                                        echo'<li><i class="icon-tab fas fa-chevron-right fa-xs"></i>'.$symptoms.';</li>';
                                    }
                                echo '</ul></div>';
}

?>