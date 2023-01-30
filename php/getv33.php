<?php 
session_start();
include 'connect.php';
$member_id = $_SESSION['vinculacion_id'];

$select_datav33 = "SELECT * FROM v33_entries WHERE member_id ={$member_id}";
$query_datav33 = $connect->query($select_datav33);
$datav33 = array();
while ($row = $query_datav33->fetch_assoc()){
    $datav33[] = $row;
}
$json_v33 = json_encode($datav33);
echo $json_v33
?>