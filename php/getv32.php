<?php 
session_start();
include 'connect.php';
$member_id = $_SESSION['vinculacion_id'];

$select_datav32 = "SELECT * FROM v32_entries WHERE member_id ={$member_id}";
$query_datav32 = $connect->query($select_datav32);
$datav32 = array();
while ($row = $query_datav32->fetch_assoc()){
    $datav32[] = $row;
}
$json_v32 = json_encode($datav32);
echo $json_v32
?>