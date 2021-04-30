<?php
require 'database.php';
$sql = "SELECT * FROM employee1 WHERE time_stamp >= DATE_SUB(CURRENT_TIMESTAMP, interval 1 day)";
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