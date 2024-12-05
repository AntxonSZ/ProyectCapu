// Función para redirigir a la página de "Tipo de Accidente" con la clave del accidente
function goToTipoAccidente(clave) {
    // Redirige a la página de Tipo de Accidente con el parámetro clave en la URL
    window.location.href = `TipoDA.html?clave=${clave}`;
}

// Alternar el menú de categorías
function toggleMenu() {
    const menu = document.getElementById('categories-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Alternar el submenú de "Tipo de accidente"
function toggleSubMenu(subMenuId) {
    const subMenu = document.getElementById(subMenuId);
    subMenu.classList.toggle('show-submenu');
}

// Función para redirigir a la sección de consulta
function goToConsulta() {
    window.location.href = 'consulta.html';
}

// Función para redirigir a la sección de captura
function goToCaptura() {
    window.location.href = 'captura.html';
}

// Función para redirigir a la base de datos
function goToBaseDatos() {
    window.location.href = 'basedatos.html';
}

// Función para redirigir al apartado de Edicion
function goToEdición() {
    window.location.href = 'Edicion.html';
}

// Función para redirigir al apartado de Tabulador de daños
function goToTabulador() {
    window.location.href = 'Tabulador.html';
}




// Mostrar el nombre del usuario si se guardó en localStorage
const userName = localStorage.getItem('userName');
const welcomeMessage = document.getElementById('welcome-message');
if (userName) {
    welcomeMessage.textContent = `¿Qué deseas hacer, ${userName}?`;
}

// Ocultar el menú cuando se hace clic fuera de él
document.addEventListener('click', function(event) {
    const menu = document.getElementById('categories-menu');
    const toggleButton = document.querySelector('.menu-toggle');

    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.style.display = 'none';
    }
});

// Alternar el menú de categorías con animación
function toggleMenu() {
    const menu = document.getElementById('categories-menu');
    menu.classList.toggle('show');
}

// Función para redirigir a la sección de "Personal" al hacer click
function goToPersonal() {
    window.location.href = 'Personal.html';  // Cambia la URL según corresponda
}