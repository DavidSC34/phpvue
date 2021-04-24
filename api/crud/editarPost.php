<?php include '../conexion.php';
//para generar las variables de cada campo -->$capo = $_POST['campo'];
foreach ($_POST as $campo => $valor) {
    $var = "$" . $campo . "='" . $valor . "';";
    // var_dump($var);
    eval($var);
}

$up = $con->prepare("UPDATE snippets SET titulo = ?, codigo = ?, descripcion = ?, categoria =? WHERE id = ? ");
$up->bind_param("ssssi", $titulo, $codigo, $descripcion, $categoria, $id);


if ($up->execute()) {
    echo "success";
} else {
    echo "fail";
}

$up->close();
$con->close();
