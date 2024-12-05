function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('main section').forEach(seccion => {
        seccion.classList.remove('seccion-activa');
        seccion.classList.add('seccion-oculta');
    });

    // Mostrar la sección seleccionada
    const seccionSeleccionada = document.getElementById(seccionId);
    if (seccionSeleccionada) {
        seccionSeleccionada.classList.remove('seccion-oculta');
        seccionSeleccionada.classList.add('seccion-activa');
    }
}

function abrirConsulta() {
    window.open('consulta.html', '_blank', 'width=800,height=600');
}


