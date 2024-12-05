function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

function toggleMenu() {
    const menu = document.getElementById('categories-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Simulación de inicio de sesión
document.addEventListener('DOMContentLoaded', () => {
    const userGreeting = document.getElementById('user-greeting');

    // Aquí simulamos que el usuario ha iniciado sesión
    const userLoggedIn = true; // Cambia esto para probar

    if (userLoggedIn) {
        userGreeting.textContent = 'Hola, Armando';
    }
});

  