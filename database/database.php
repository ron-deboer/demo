<?php

//
class Database {

    private static $db;

    public static function open() {
        try {
            $db = new PDO("sqlite:data.sqlite3");
            $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);    
            $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            static::$db = $db;      
        } catch(PDOException $e) {
            echo '<pre>';
            var_dump($e);
            echo '</pre>';
            die();
        }
    }

    public static function query($sql, $params) {
        try {
            $db = static::$db;
            $stmt = $db->prepare($sql);
            $stmt->execute($params);
            $rows = $stmt->fetchAll();
            return $rows;
        } catch(PDOException $e) {
            echo '<pre>';
            var_dump($e);
            echo '</pre>';
            die();
        }
    }

    public static function execute($sql, $params) {
        try {
            $db = static::$db;
            $stmt = $db->prepare($sql);
            return $stmt->execute($params);
        } catch(PDOException $e) {
            echo '<pre>';
            var_dump($e);
            echo '</pre>';
            die();
        }
    }

}