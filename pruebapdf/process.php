<?php

// Configuración de la base de datos
$host = 'localhost';
$dbname = 'tu_base_datos';
$user = 'root';
$password = '';

// Conexión a la base de datos
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error al conectar con la base de datos: " . $e->getMessage());
}

// Capturar datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$direccion = $_POST['direccion'];
$ciudad = $_POST['ciudad'];
$pais = $_POST['pais'];
$codigo_postal = $_POST['codigo_postal'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$genero = $_POST['genero'];

// Insertar datos en la base de datos
$sql = "INSERT INTO personas (nombre, apellido, email, telefono, direccion, ciudad, pais, codigo_postal, fecha_nacimiento, genero)
        VALUES (:nombre, :apellido, :email, :telefono, :direccion, :ciudad, :pais, :codigo_postal, :fecha_nacimiento, :genero)";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':nombre' => $nombre,
    ':apellido' => $apellido,
    ':email' => $email,
    ':telefono' => $telefono,
    ':direccion' => $direccion,
    ':ciudad' => $ciudad,
    ':pais' => $pais,
    ':codigo_postal' => $codigo_postal,
    ':fecha_nacimiento' => $fecha_nacimiento,
    ':genero' => $genero,
]);

// Generar el PDF
require('fpdf.php');

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', 'B', 16);
$pdf->Cell(40, 10, 'Datos del Formulario');
$pdf->Ln(10);

$pdf->SetFont('Arial', '', 12);
$pdf->Cell(40, 10, "Nombre: $nombre");
$pdf->Ln();
$pdf->Cell(40, 10, "Apellido: $apellido");
$pdf->Ln();
$pdf->Cell(40, 10, "Email: $email");
$pdf->Ln();
$pdf->Cell(40, 10, "Telefono: $telefono");
$pdf->Ln();
$pdf->Cell(40, 10, "Direccion: $direccion");
$pdf->Ln();
$pdf->Cell(40, 10, "Ciudad: $ciudad");
$pdf->Ln();
$pdf->Cell(40, 10, "Pais: $pais");
$pdf->Ln();
$pdf->Cell(40, 10, "Codigo Postal: $codigo_postal");
$pdf->Ln();
$pdf->Cell(40, 10, "Fecha de Nacimiento: $fecha_nacimiento");
$pdf->Ln();
$pdf->Cell(40, 10, "Genero: $genero");

// Descargar el PDF
$pdf->Output('D', 'datos_formulario.pdf');
?>
