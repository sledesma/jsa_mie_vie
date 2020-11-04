<?php

$db = mysqli_connect('localhost', 'root', '', 'comercioit');

switch($_SERVER['REQUEST_METHOD']) {

    case 'GET':

        $result = mysqli_query($db, 'SELECT * FROM productos');

        if(!$result) die();

        $data = mysqli_fetch_all($result, MYSQLI_ASSOC);

        header('Content-type: application/json');

        echo json_encode($data);

    break;

    case 'POST':

        header('Content-type: application/json');

        echo json_encode($_POST);

    break;

}