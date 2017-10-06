<?php   
    include('connect.php');
    $conn = db_connect();


    if (isset($_POST['user'])) {
        $user = $_POST['user'];

        $query = sprintf(
            "SELECT * from accounts WHERE username = '%s'",
            mysqli_real_escape_string($conn, $user)
        );

        $checkUser = mysqli_query($conn, $query);

        if (!$checkUser) {
            die('Query failed to execute for some reason');
        }

        if (mysqli_num_rows($checkUser) > 0) {
            $result = true;
        }
        else{
            $result = false;
        }
    }

    mysqli_close($conn);
    echo $result;
?>
