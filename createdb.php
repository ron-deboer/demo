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

//
$sql = <<<EOT
    CREATE TABLE IF NOT EXISTS user
      (
        id INTEGER PRIMARY KEY, 
        userid TEXT, 
        password TEXT,
        email TEXT,
        role TEXT DEFAULT 'USER',
        lastlogin DATE DEFAULT (datetime('now', 'localtime')),        
        deleted BOOLEAN DEFAULT 0
      );
EOT;
$db->exec($sql);
$sql = <<<EOT
    CREATE TABLE IF NOT EXISTS project
      (
        id INTEGER PRIMARY KEY, 
        projectid TEXT, 
        desc TEXT,
        manager TEXT,
        status TEXT,
        updated DATE DEFAULT (datetime('now', 'localtime')),        
        deleted BOOLEAN DEFAULT 0
      );
EOT;
$db->exec($sql);
$sql = <<<EOT
    CREATE TABLE IF NOT EXISTS task
      (
        id INTEGER PRIMARY KEY, 
        taskid TEXT, 
        projectid TEXT,
        desc TEXT,
        userid TEXT,
        comment TEXT,
        status TEXT,
        updated DATE DEFAULT (datetime('now', 'localtime')),        
        deleted BOOLEAN DEFAULT 0
      );
EOT;
$db->exec($sql);

insert_user('deboerr', '123456', 'deboerr@email.com', 'ADMIN');
insert_user('webadmin', '123456', 'webadmin@email.com', 'ADMIN');
insert_user('user1', '123456', 'user1@email.com');
insert_user('user2', '123456', 'user2@email.com');

insert_project('website-1', 'Website Upgrade', 'user1', 'IN_PROGRESS');
insert_project('mobile-1', 'Mobile App Upgrade', 'user1', 'IN_PROGRESS');

insert_task('web001', 'website-1', 'Fix homepage on website', '', '', 'BACKLOG');
insert_task('web002', 'website-1', 'Migrate DB to postgress', '', '', 'BACKLOG');
insert_task('web003', 'website-1', 'Add contact page to website', '', '', 'BACKLOG');
insert_task('web004', 'website-1', 'Add links to social media to website', '', '', 'BACKLOG');
insert_task('mob001', 'mobile-1', 'Upgrade mobile app to v2.2', '', '', 'BACKLOG');

$sql = <<<EOT
    CREATE TABLE IF NOT EXISTS team
      (
        id INTEGER PRIMARY KEY, 
        name TEXT, 
        city TEXT,
        state TEXT,
        venue TEXT,
        league TEXT,
        updated DATE DEFAULT (datetime('now', 'localtime')),        
        deleted BOOLEAN DEFAULT 0
      );
EOT;
$db->exec($sql);

if (($handle = fopen(__DIR__ . "/database/teams.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        insert_team($data[0], $data[1], $data[2], $data[3], $data[4]);
    }
    fclose($handle);
}

die('<h1>Done!!</h1>');

//
function insert_user($userid, $password, $email, $role = 'USER') {
    GLOBAL $db;
    $sql = "INSERT INTO 'user' ('userid', 'password', 'email', 'role') VALUES (?, ?, ?, ?);";
    $stmt = $db->prepare($sql);
    $stmt->execute(array($userid, $password, $email, $role));
}
//
function insert_project($projectid, $desc, $manager, $status = 'NOT-STARTED') {
    GLOBAL $db;
    $sql = "INSERT INTO 'project' ('projectid', 'desc', 'manager', 'status') VALUES (?, ?, ?, ?);";
    $stmt = $db->prepare($sql);
    $stmt->execute(array($projectid, $desc, $manager, $status));
}
//
function insert_task($taskid, $projectid, $desc, $userid, $comment='', $status = 'NOT-STARTED') {
    GLOBAL $db;
    $sql = "INSERT INTO 'task' ('taskid', 'projectid', 'desc', 'userid', 'comment', 'status') VALUES (?, ?, ?, ?, ?, ?);";
    $stmt = $db->prepare($sql);
    $stmt->execute(array($taskid, $projectid, $desc, $userid, $comment, $status));
}
//
function insert_team($name, $city, $state, $venue, $league) {
    GLOBAL $db;
    $sql = "INSERT INTO 'team' ('name', 'city', 'state', 'venue', 'league') VALUES (?, ?, ?, ?, ?);";
    $stmt = $db->prepare($sql);
    $stmt->execute(array($name, $city, $state, $venue, $league));
}