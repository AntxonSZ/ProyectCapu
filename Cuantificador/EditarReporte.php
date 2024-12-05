<?php
// Incluir el archivo de conexión
include 'conexion.php';

// Comprobar si se recibe un ID
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Consultar los datos del reporte a editar
    $sql = "SELECT * FROM reportes WHERE id = $id";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
}

// Si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $plazaCobro = $_POST['plaza-cobro'];
    $folioBoletin = $_POST['folio-boletin'];
    $reporteAseguradora = $_POST['reporte-aseguradora'];
    $numeroSiniestro = $_POST['numero-siniestro'];
    $clave = $_POST['clave'];
    $concepto = $_POST['concepto'];
    $kilometro = $_POST['kilometro'];
    $cuerpo = $_POST['cuerpo'];
    $horaSiniestro = $_POST['hora-siniestro'];
    $fechaSiniestro = $_POST['fecha-siniestro'];

    // Preparar la consulta SQL para actualizar los datos
    $sql = "UPDATE reportes SET
                plaza_cobro = '$plazaCobro',
                folio_boletin = '$folioBoletin',
                reporte_aseguradora = '$reporteAseguradora',
                numero_siniestro = '$numeroSiniestro',
                clave = '$clave',
                concepto = '$concepto',
                kilometro = '$kilometro',
                cuerpo = '$cuerpo',
                hora_siniestro = '$horaSiniestro',
                fecha_siniestro = '$fechaSiniestro'
            WHERE id = $id";

    // Ejecutar la consulta
    if ($conn->query($sql) === TRUE) {
        echo "Reporte actualizado correctamente.";
    } else {
        echo "Error al actualizar el reporte: " . $conn->error;
    }
}
?>

<form method="POST" action="">
    Plaza de Cobro: <input type="text" name="plaza-cobro" value="<?php echo $row['plaza_cobro']; ?>"><br>
    Folio de Boletín: <input type="text" name="folio-boletin" value="<?php echo $row['folio_boletin']; ?>"><br>
    Reporte de Aseguradora: <input type="text" name="reporte-aseguradora" value="<?php echo $row['reporte_aseguradora']; ?>"><br>
    Número de Siniestro: <input type="text" name="numero-siniestro" value="<?php echo $row['numero_siniestro']; ?>"><br>
    Clave: <input type="text" name="clave" value="<?php echo $row['clave']; ?>"><br>
    Concepto: <textarea name="concepto"><?php echo $row['concepto']; ?></textarea><br>
    Kilómetro: <input type="text" name="kilometro" value="<?php echo $row['kilometro']; ?>"><br>
    Cuerpo: <input type="text" name="cuerpo" value="<?php echo $row['cuerpo']; ?>"><br>
    Hora del Siniestro: <input type="time" name="hora-siniestro" value="<?php echo $row['hora_siniestro']; ?>"><br>
    Fecha del Siniestro: <input type="date" name="fecha-siniestro" value="<?php echo $row['fecha_siniestro']; ?>"><br>
    
    <button type="submit">Guardar cambios</button>
</form>
