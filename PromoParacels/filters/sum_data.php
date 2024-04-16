<?php
include '../data/sum_field.php';

if($_POST['gender']){
    $gender = ${$_POST['gender']};
    $a = Array();
    foreach ($gender as $gender){
        array_push($a, $gender);
    }
    echo(json_encode($a));
}
?>