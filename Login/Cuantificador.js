// Recuperar el nombre del usuario desde localStorage
const userName = localStorage.getItem('userName');

// Mostrar el mensaje personalizado en la página
const welcomeMessage = document.getElementById('welcome-message');
welcomeMessage.textContent = `¿Qué deseas hacer, ${userName}?`;

// Función para redirigir a la sección de captura
function goToCaptura() {
    window.location.href = 'Captura.html'; // Ajusta la ruta según sea necesario
}