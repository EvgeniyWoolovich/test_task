<?php

require_once('../connector/mySQL.php');

class Company {
    public static function create(string $name, string $description, string $email, string $phone) {
        $connector = Mysql::getInstance();
        $contactId = $connector->insert([
            "phone" => $phone,
            "email" => $email
        ], Mysql::CONTACT_TABLE_NAME);
        var_dump($contactId);
    } 

    public static function isExist(string $email) {
        return Mysql::getInstance()->isExistContact($email);
    }
}