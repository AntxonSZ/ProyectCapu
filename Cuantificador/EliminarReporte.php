<?php
// Incluir el archivo de conexión
include 'conexion.php';

// Comprobar si se recibe un ID
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Consultar si existe el reporte con ese ID
    $sql = "DELETE FROM reportes WHERE id = $id";

    // Ejecutar la consulta
    if ($conn->query($sql) === TRUE) {
        echo "Reporte eliminado correctamente.";
    } else {
        echo "Error al eliminar el reporte: " . $conn->error;
    }
}

// Redirigir nuevamente a la lista de reportes
header("Location: mostrar_reportes.php");
?>
