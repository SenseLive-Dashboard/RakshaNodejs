<?php
require 'database.php';
$sql = "SELECT val,phase1,phase2,phase3 FROM employee1 where data_type='Reactive Power' ORDER BY time_stamp DESC LIMIT 1";
$myArray = array();
if($result = mysqli_query($con,$sql))
{
  
  while($row = mysqli_fetch_assoc($result))
  {
    $myArray[] = $row;

  }

  echo json_encode($myArray);
}
else
{
  http_response_code(404);
}
?>