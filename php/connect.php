<?php
$server = "localhost";
$user = "root";
$password = "";
$db = "practices_system";
$connect = mysqli_connect($server, $user, $password, $db);

if($connect->connect_error){
    die("Error al conectar la base de datos".$connect->connect_error);
}
?>