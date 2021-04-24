
<?php include '../conexion.php';
header('Access-Control-Allow-Origin: *');


if (isset($_SESSION['user'])) {
    $user = $_SESSION['user'];
} else {
    $user = 'No user';
}
echo json_encode($user);

$con->close();
