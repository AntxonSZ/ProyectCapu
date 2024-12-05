// Obtener el parámetro 'clave' de la URL
const urlParams = new URLSearchParams(window.location.search);
const clave = urlParams.get('clave');

// Mostrar el tipo de accidente correspondiente según la clave
const tipoAccidenteElement = document.getElementById('tipoAccidente');
if (clave) {
    switch (clave) {
        case '1':
            tipoAccidenteElement.textContent = 'Asalto';
            break;
        case '2':
            tipoAccidenteElement.textContent = 'Atropellado';
            break;
        case '3':
            tipoAccidenteElement.textContent = 'Atropellado fuera de la carpeta';
            break;
        case '4':
            tipoAccidenteElement.textContent = 'Caída de árboles sobre vehículo';
            break;
        case '5':
            tipoAccidenteElement.textContent = 'Caída de barrera';
            break;
        case '6':
            tipoAccidenteElement.textContent = 'Caída de carga sobre otro vehículo';
            break;
        case '7':
            tipoAccidenteElement.textContent = 'Caída de motocicleta';
            break;
        case '8':
            tipoAccidenteElement.textContent = 'Caída en bache sobre carril de circulación';
            break;
        case '9':
            tipoAccidenteElement.textContent = 'Choque de costado';
            break;
        case '10':
            tipoAccidenteElement.textContent = 'Choque de frente';
            break;
        case '11':
            tipoAccidenteElement.textContent = 'Choque de motocicleta';
            break;
        case '12':
            tipoAccidenteElement.textContent = 'Choque lateral';
            break;
        case '13':
            tipoAccidenteElement.textContent = 'Choque por alcance';
            break;
        case '14':
            tipoAccidenteElement.textContent = 'Choque por alcance múltiple';
            break;
        case '15':
            tipoAccidenteElement.textContent = 'Choque contra árbol sobre carpeta';
            break;
        case '16':
            tipoAccidenteElement.textContent = 'Choque contra árboles';
            break;
        case '17':
            tipoAccidenteElement.textContent = 'Choque contra bases o barandales de puentes';
            break;
        case '18':
            tipoAccidenteElement.textContent = 'Choque contra carga de otro vehículo sobre carpeta';
            break;
        case '19':
            tipoAccidenteElement.textContent = 'Choque contra defensa metálica';
            break;
        case '20':
            tipoAccidenteElement.textContent = 'Choque contra equipo de peaje';
            break;
        case '21':
            tipoAccidenteElement.textContent = 'Choque contra instalaciones de carril';
            break;
        case '22':
            tipoAccidenteElement.textContent = 'Choque contra llanta sobre carpeta';
            break;
        case '23':
            tipoAccidenteElement.textContent = 'Choque contra material de reparación de la carpeta';
            break;
        case '24':
            tipoAccidenteElement.textContent = 'Choque contra muro central';
            break;
        case '25':
            tipoAccidenteElement.textContent = 'Choque contra muros laterales';
            break;
        case '26':
            tipoAccidenteElement.textContent = 'Choque contra objeto sobre carpeta asfáltica';
            break;
        case '27':
            tipoAccidenteElement.textContent = 'Choque contra piedras';
            break;
        default:
            tipoAccidenteElement.textContent = 'Tipo de accidente desconocido';
            break;
    }
}
