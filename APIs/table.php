<?php
require 'database.php';

$sql = "SELECT * FROM employee1 ORDER BY time_stamp DESC";
$myArray = array();

if($result = mysqli_query($con,$sql))
{
  
  while($row = mysqli_fetch_assoc($result))
  {
    $myArray[] = $row;

  }

  echo json_encode($myArray);
}
/*for multiquery
if (mysqli_multi_query($con,$sql)){
  do{
     if ($result=mysqli_store_result($con)){
        while ($row=mysqli_fetch_row($result)){
          $myArray[] = $row;
        }
        echo json_encode($myArray);
     }
  }while (mysqli_next_result($con));
  
}*/
else
{
  http_response_code(404);
}
?>

