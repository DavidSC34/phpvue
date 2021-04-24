<?php include '../conexion.php';
header('Access-Control-Allow-Origin: *');

$id = $con->real_escape_string(htmlentities($_GET['id']));
$temporal = array();
$resultado = array();

$sel = $con->query("SELECT * FROM snippets WHERE id='$id'");

while ($f = $sel->fetch_assoc()) {
    $temporal = $f;
    array_push($resultado, $temporal);
}

echo json_encode($resultado[0]); // regresa uno, y no usar el v-for en la vista

$sel->close();
$con->close();
