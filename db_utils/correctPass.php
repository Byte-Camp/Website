<?php
    include('connect.php');
    $conn = db_connect();

    if (isset($_POST['pass']) && isset($_POST['user'])) {
        $password = $_POST['pass'];
        $user = $_POST['user'];
        $salt = 'somesortofsalt';

        $query = sprintf(
            "SELECT password from accounts WHERE username = '%s'",
            mysqli_real_escape_string($conn, $user)
        );

        $checkPass = mysqli_query($conn, $query);

        if (!$checkPass) {
            die('Query failed to execute for some reason');
        }

        $row = mysqli_fetch_row($checkPass);

        if ($row[0] == hash('sha256', $password . $salt)) {
            $result = true;
        }
        else{
            $result = false;
        }
    }

    mysqli_close($conn);
    echo $result;
?>
