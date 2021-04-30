<?php
require 'database.php';
$sql = "SELECT time_stamp,val,phase1,phase2,phase3 FROM employee1 where data_type='Current' ORDER BY time_stamp DESC LIMIT 3";
$myArray = array();
if($result = mysqli_query($con,$sql))
{
  
  while($row = mysqli_fetch_array($result))
  {
    $myArrayItem= array("ts" =>  $row['time_stamp'] ,"d1" =>  $row['val'],"d2"=> $row['phase1'],"d3"=> $row['phase2'],"d4"=> $row['phase3']);
    array_push($myArray,$myArrayItem);

  } 
 header('Content-type: application/json');
  echo json_encode($myArray,JSON_NUMERIC_CHECK);
}
else
{
  http_response_code(404);
}
?>