// Cargar el contenido del archivo registro.html cuando se hace clic en "Regístrate"
document.getElementById('registro-link').addEventListener('click', function(event) {
    event.preventDefault();
    fetch('Login/registro.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('login-container').innerHTML = html;
        })
        .catch(error => console.error('Error al cargar el formulario de registro:', error));
});
