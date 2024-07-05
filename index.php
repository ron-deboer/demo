<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require 'bootstrap.php';

$f3 = require('Libs/fatfree-core/base.php');

// render home page (GET)
$f3->route('GET /','Controllers\Home->get');

// render page (GET,POST,PUT etc)
$f3->map('/@page','Controllers\@page');

// render page->method (GET)
$f3->route('GET /@page/@method','Controllers\@page->@method');



// api/table (GET,POST,PUT etc)
$f3->map('/api/@table','Controllers\Api@table');

// api/table/id (GET,POST,PUT etc)
$f3->map('/api/@table/@id','Controllers\Api@table');

// api/table->search (POST)
$f3->route('POST /api/@table/search','Controllers\Api@table->search');

// /api/task/status/@id/@status (GET)
$f3->route('GET /api/Task/status/@id/@status','Controllers\ApiTask->setStatus');

$f3->run();
