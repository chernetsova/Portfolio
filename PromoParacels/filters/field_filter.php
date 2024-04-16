<?php

include '../data/sum_field.php';

$gender = ${$_POST['gender']};
$value = $_POST['field'];

    foreach ($gender as $k=>$v) {
        if ($gender[$k]['value'] == $value) {
            $val = $gender[$k]['value'];
            $style = $gender[$k]['style'];
            $mrt = $gender[$k]['mrt'];
        }
    }

            echo(json_encode(array('style'=>$style, 'mrt'=>$mrt)));
?>