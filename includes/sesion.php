<?php
@session_start();

if (!isset($_SESSION['user'])) {
    // header("Location:../principal");
    header("location:http://localhost/phpvue/login/index.php");
    exit();
}
