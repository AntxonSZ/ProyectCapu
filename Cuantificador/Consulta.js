// Función para buscar folio
function buscarFolio() {
    const folio = document.getElementById('folio').value;
    if (folio) {
        alert(`Buscando información para el folio: ${folio}`);
        // Aquí puedes agregar la lógica de búsqueda o redirección
    } else {
        alert("Por favor, ingrese un número de folio o siniestro.");
    }
}
