<?php
// Conexión a la base de datos
include 'conexion.php';

// Verificar si la solicitud es POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Recibir los datos del formulario
    $plazaCobro = $_POST['plaza_cobro'];
    $folioBoletin = $_POST['folio_boletin'];
    $reporteAseguradora = $_POST['reporte_aseguradora'];
    $numeroSiniestro = $_POST['numero_siniestro'];
    $clave = $_POST['clave'];
    $concepto = $_POST['concepto'];
    $kilometro = $_POST['kilometro'];
    $cuerpo = $_POST['cuerpo'];
    $horaSiniestro = $_POST['hora_siniestro'];
    $fechaSiniestro = $_POST['fecha_siniestro'];
    $validaDanoss = $_POST['valida_danos'];
    $elaboroEvaluacion = $_POST['elaboro_evaluacion'];
    $recibePlaza = $_POST['recibe_plaza'];

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO reportes (plaza_cobro, folio_boletin, reporte_aseguradora, numero_siniestro, clave, concepto, kilometro, cuerpo, hora_siniestro, fecha_siniestro, valida_danos, elaboro_evaluacion, recibe_plaza)
            VALUES ('$plazaCobro', '$folioBoletin', '$reporteAseguradora', '$numeroSiniestro', '$clave', '$concepto', '$kilometro', '$cuerpo', '$horaSiniestro', '$fechaSiniestro', '$validaDanoss', '$elaboroEvaluacion', '$recibePlaza')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => $conn->error]);
    }

    // Cerrar la conexión
    $conn->close();
}
?>
