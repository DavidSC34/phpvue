<?php include '../conexion.php';
//para generar las variables de cada campo -->$capo = $_POST['campo'];
foreach ($_POST as $campo => $valor) {
    $var = "$" . $campo . "='" . $valor . "';";
    // var_dump($var);
    eval($var);
}

$id = null;
$user = $_SESSION['user'];
$foto = $_SESSION['foto'];

$ins = $con->prepare("INSERT INTO snippets VALUES(?,?,?,?,?,?,?) ");
$ins->bind_param("issssss", $id, $user, $foto, $titulo, $codigo, $descripcion, $categoria);

if ($ins->execute()) {
    echo "success";
} else {
    echo "fail";
}

$ins->close();
$con->close();
