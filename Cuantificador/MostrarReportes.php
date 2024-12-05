<?php
// Incluir el archivo de conexión
include 'conexion.php';

// Consultar los reportes en la base de datos
$sql = "SELECT * FROM reportes";
$result = $conn->query($sql);

// Mostrar los reportes en una tabla
echo "<table border='1'>
        <tr>
            <th>ID</th>
            <th>Plaza de Cobro</th>
            <th>Folio de Boletín</th>
            <th>Reporte de Aseguradora</th>
            <th>Número de Siniestro</th>
            <th>Clave</th>
            <th>Concepto</th>
            <th>Acciones</th>
        </tr>";

if ($result->num_rows > 0) {
    // Mostrar los registros en la tabla
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["id"] . "</td>
                <td>" . $row["plaza_cobro"] . "</td>
                <td>" . $row["folio_boletin"] . "</td>
                <td>" . $row["reporte_aseguradora"] . "</td>
                <td>" . $row["numero_siniestro"] . "</td>
                <td>" . $row["clave"] . "</td>
                <td>" . $row["concepto"] . "</td>
                <td>
                    <a href='EditarReporte.php?id=" . $row["id"] . "'>Editar</a> | 
                    <a href='EliminarReporte.php?id=" . $row["id"] . "'>Eliminar</a>
                </td>
            </tr>";
    }
    echo "</table>";
} else {
    echo "No hay reportes registrados.";
}

$conn->close();
?>
