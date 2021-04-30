<?php


    include_once("database.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $empname = trim($request->empname);
        $empemail = mysqli_real_escape_string($con, trim($request->empemail));
        $empdep = trim($request->empdep);
        $empmeter = trim($request->empmeter);
    //    $empmeter = implode(',',trim($request->empmeter));
        
        
        
            $sql = "INSERT INTO empregister(empname, empemail, empdep, empmeter) VALUES ('$empname', '$empemail', '$empdep', '$empmeter')";

            if ($con->query($sql) === TRUE) {
                $authdata = [
                    'empname' => $empname,
                    'empemail' => $empemail,
                    'empdep' => $empdep,
                    'empmeter' => $empmeter,
                    'id' => mysqli_insert_id($con)
                    ];
                echo json_encode($authdata);
            } 
        
    }
        

?>