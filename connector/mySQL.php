<?php

class Mysql
{
    static ?Mysql $instance = null;
    private const URL =  'localhost';
    private const DBNAME = 'test';
    private const DBPASSWORD = 'RusWool2012//';
    private const USERNAME = 'root';
    private ?mysqli $connector = null;
    public const COMPANY_TABLE_NAME = 'company';
    public const CONTACT_TABLE_NAME = 'contact';
    public const SUBSCRIPTION_TABLE_NAME = 'subscription';

    public static function getInstance()
    {
        if (!self::$instance) {
            return new Mysql();
        }

        return self::$instance;
    }

    private function __construct()
    {
        $this->connector = new mysqli(self::URL, self::USERNAME, self::DBPASSWORD, self::DBNAME);
    }

    public function __destruct()
    {
        $this->connector->close();
    }

    public function insert(array $data, string $tableName)
    {
        $fields = implode(",", array_keys($data));
        $newdata = "'" . implode("','", $data) . "'";

        $query = ("INSERT INTO $tableName ($fields) VALUES ($newdata)");
        return $this->connector->query($query);
    }
    
    public function isExistContact(string $email) {
        $tableName = self::CONTACT_TABLE_NAME;
        $link = mysqli_connect("localhost", "root", "RusWool2012//", "test");
        $query = ("SELECT id FROM $tableName WHERE email=$email");
        $count = mysqli_execute_query($link, $query, ['DEU']);
        $count = $this->connector->execute_query($query, ['DEU']);
        var_dump('olo');
        var_dump($count);die;
        if($this->connector->query($query) === 1) {
            return true;
        } 

        return false;
    }

 
}
