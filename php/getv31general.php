<?php 
session_start();
include 'connect.php';
$member_id = $_SESSION['vinculacion_id'];

$select_datav31 = "SELECT * FROM v31_entries WHERE member_id ={$member_id}";
$query_datav31 = $connect->query($select_datav31);
$datav31 = array();
while ($row = $query_datav31->fetch_assoc()){
    $datav31[] = $row;
}
$json_v31 = json_encode($datav31);
echo $json_v31
?>