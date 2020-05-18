<?php

    require_once '../../pdo/connectDB.php';

    $sql = "SELECT name_ru FROM net_country";
    $res = $pdo->query($sql);

    $res = $res->fetchAll(PDO::FETCH_ASSOC);

    foreach($res as $k => $v) {
        foreach($v as $k => $v) {
            $countrys .= '<li>'.$v.'</li>';
        }
    }

    $data = $countrys;


   print_r($data);