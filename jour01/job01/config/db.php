<?php

$host = "127.0.0.1:3306";
$dbname = "runtrack05";
$username = "root";
$password = "root";

$link = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
$link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
