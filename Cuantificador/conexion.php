<?php
$servername = "localhost";
$username = "root";  // Cambia esto si es necesario
$password = "";      // Cambia esto si es necesario
$dbname = "dbcapufe";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbcapufe);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
