<?php

    // connect with database
    $host="localhost";
    $user="root";
    $pass="Sujit@123";
    $db="signup";

    if(!$conn = mysqli_connect($host, $user,$pass,$db))
        {
            die("fail the connection");
        }
    echo('');

    if($_SERVER['REQUEST_METHOD'] =="POST")
    {
        $username = $_POST['username'];
        $password = $_POST['password'];
        if(!empty($username) && !empty($password) && !is_numeric($username))
        {
            
            $query = "insert into sign (username,password) values ('$username', '$password')";
            mysqli_query($conn, $query);
            header("Location: userprofile.html");
            die;
        }
        else{
            echo"please enter some validinformation";
        }
    }

?>