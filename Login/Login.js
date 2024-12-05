// Función para mostrar/ocultar la contraseña
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('password-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.src = ''; // Cambiar al ícono de "ver"
    } else {
        passwordInput.type = 'password';
        passwordIcon.src = ''; // Cambiar al ícono de "esconder"
    }
}

// Escuchar el evento de envío del formulario de login
document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que la página se recargue

    const employeeId = document.getElementById('employee-id').value.trim();
    const password = document.getElementById('password').value.trim();

    // Base de datos simulada de usuarios
    const users = {
        "415614": { password: "1234", name: "Eduardo" },
        "123456": { password: "abcd", name: "Carlos" },
        "789012": { password: "qwerty", name: "Ana" }
    };

    // Verificación de las credenciales
    const user = users[employeeId];

    if (user && user.password === password) {
        // Almacenar el nombre del usuario en localStorage
        localStorage.setItem('userName', user.name);

        // Redirigir a la página Cuantificador.html
        window.location.href = '../Cuantificador/Categorias.html'; // Asegúrate de que la ruta sea correcta
    } else {
        // Mostrar un mensaje de error si las credenciales no coinciden
        document.getElementById('login-error').style.display = 'block';
    }
});


// Función para mostrar el mensaje de error
function displayError(message) {
    const errorElement = document.getElementById('login-error');
    errorElement.textContent = message; // Establece el mensaje de error
    errorElement.style.display = 'block'; // Muestra el mensaje de error
}

