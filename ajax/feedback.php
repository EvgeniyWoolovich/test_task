<?php

require_once('../service/company.php');
header('Content-Type: application/json');
 
var_dump($_POST);

$result = array(
	'text'  => 'Текст',
	'error' => 'Ошибка'
);
if (Company::isExist($_POST["email"])) {
    echo json_encode([
        'status'=> "601",
        "message"=>"Такой email уже зарегистрирован"
    ]);
    die;
}
var_dump('ololoS    ');
Company::create($_POST["name"], $_POST["description"], $_POST["email"], $_POST["phone"]);
echo json_encode($result);