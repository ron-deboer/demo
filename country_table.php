<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
date_default_timezone_set('Australia/Melbourne');

//
$db = null;
try {
    $qfn = "sqlite:".__DIR__."/data.sqlite3";
    echo "<pre>$qfn\n\n";    
    $db = new PDO($qfn);
    $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);    
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch(PDOException $e) {
    echo "<pre>";
    var_dump($e);
    echo "</pre>";    
    die();
}

if (($handle = fopen(__DIR__ . "/database/countries.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        insert_country($data[0], $data[1], $data[2], $data[3], $data[4]);
    }
    fclose($handle);
}

die('<h1>Done!!</h1>');

//
function insert_country($code, $name, $size, $population, $continent) {
    GLOBAL $db;
    $sql = "INSERT INTO 'country' ('code', 'name', 'size', 'population', 'continent') VALUES (?, ?, ?, ?, ?);";
    $stmt = $db->prepare($sql);
    $stmt->execute(array($code, $name, $size, $population, $continent));
}