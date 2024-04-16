<?php

include '../data/sum_field.php';

$gender = ${$_POST['gender']};
$value = $_POST['field'];
$view = $_POST['view'];

       foreach($gender as $k=>$v){
           if($value == $gender[$k]['value']){
               $mrt = $gender[$k]['mrt'];
           }

       }
foreach($mrt as $k=>$v){
    if($view == $mrt[$k]['title']){
        $price = $mrt[$k]['price'];
    }
}
echo(json_encode(array('price'=>$price)));
?>