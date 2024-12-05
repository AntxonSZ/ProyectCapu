// Mostrar el precio basado en el tipo de vehículo seleccionado
function mostrarPrecio() {
    const tipoVehiculo = document.getElementById('tipoVehiculo').value;
    let precio = 0;
    let nombreVehiculo = '';

    // Asignar precio y nombre del vehículo según la selección
    switch (tipoVehiculo) {
        case 'automovil':
            precio = 85;
            nombreVehiculo = 'Automóvil';
            break;
        case 'trailer':
            precio = 93;
            nombreVehiculo = 'Trailer';
            break;
        case 'moto':
            precio = 60;
            nombreVehiculo = 'Motocicleta';
            break;
        case 'camioneta':
            precio = 95;
            nombreVehiculo = 'Camioneta';
            break;
        case 'autobus':
            precio = 120;
            nombreVehiculo = 'Autobús';
            break;
        default:
            precio = 0;
            nombreVehiculo = '';
    }

    // Mostrar el precio en el HTML
    document.getElementById('monto').textContent = precio;

    // Cambiar el título dinámicamente
    document.getElementById('tituloPrecio').textContent = `Precio para ${nombreVehiculo}:`;
}

// Evitar que el formulario recargue la página al hacer clic en "Pagar Ahora"
document.getElementById('pagoFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Pago realizado con éxito. ¡Gracias por usar nuestro servicio!");
});
