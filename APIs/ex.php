<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$policies = [];
$sql = "SELECT * FROM employee1";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $policies[$i]['time_stamp']    = $row['time_stamp'];
    $policies[$i]['company'] = $row['company'];
    $policies[$i]['data_type'] = $row['data_type'];
    $i++;
  }

  echo json_encode($policies);
}
else
{
  http_response_code(404);
}