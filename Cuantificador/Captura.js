// Objeto con las claves y sus respectivos conceptos
const conceptos = {
    '1': 'Asalto',
    '2': 'Atropellado',
    '3': 'Atropellado fuera de la carpeta',
    '4': 'Caída de árboles sobre vehículo',
    '5': 'Caída de barrera',
    '6': 'Caída de carga sobre otro vehículo',
    '7': 'Caída de motocicleta',
    '8': 'Caída en bache sobre carril de circulación',
    '9': 'Choque de costado',
    '10': 'Choque de frente',
    '11': 'Choque de motocicleta',
    '12': 'Choque lateral',
    '13': 'Choque por alcance',
    '14': 'Choque por alcance múltiple',
    '15': 'Choque contra árbol sobre carpeta',
    '16': 'Choque contra árboles',
    '17': 'Choque contra bases o barandales de puentes',
    '18': 'Choque contra carga de otro vehículo sobre carpeta',
    '19': 'Choque contra defensa metálica',
    '20': 'Choque contra equipo de peaje',
    '21': 'Choque contra instalaciones de carril',
    '22': 'Choque contra llanta sobre carpeta',
    '23': 'Choque contra material de reparación de la carpeta',
    '24': 'Choque contra muro central',
    '25': 'Choque contra muros laterales',
    '26': 'Choque contra objeto sobre carpeta asfáltica',
    '27': 'Choque contra piedras'
};

// Función para actualizar el concepto en base a la clave ingresada
function updateConcept() {
    const clave = document.getElementById('clave').value;
    const conceptoElement = document.getElementById('concepto');
    
    // Si la clave existe en el objeto, muestra el concepto, si no muestra un mensaje por defecto
    if (conceptos[clave]) {
        conceptoElement.value = conceptos[clave];
    } else {
        conceptoElement.value = 'Concepto no encontrado';
    }
}

// Objeto con las claves, conceptos, medidas y precios unitarios
const damageData = {
    '1': { 
        concepto: 'SEÑAL CHAROLA RECTANGULAR, CON UN POSTE - 71 x 71 cm., Incluye poste.',
        medida: 'PIEZA',
        valor: 12438
    },
    '2': { 
        concepto: 'SEÑAL CHAROLA RECTANGULAR, CON UN POSTE - 86 x 86 cm., Incluye poste.',
        medida: 'PIEZA',
        valor: 10560
    },
    '3': { 
        concepto: 'RELEJANTE DE MENSULAS',
        medida: 'PIEZA',
        valor: 128.61
    },
    '4': { 
        concepto: 'Caída de árboles sobre vehículo',
        medida: 'PIEZA',
        valor: 15000
    },
    '5': { 
        concepto: 'Caída de barrera',
        medida: 'PIEZA',
        valor: 9300
    },
};

// Función para actualizar el concepto, medida y precio unitario según la clave ingresada
function updateDamageConcept() {
    const clave = document.getElementById('clave-dano').value;
    const conceptoElement = document.getElementById('concepto-dano');
    const medidaElement = document.getElementById('medida-dano');
    const precioUnitarioElement = document.getElementById('precio-unitario');
    
    // Si la clave existe en el objeto, muestra el concepto, medida y precio unitario
    if (damageData[clave]) {
        conceptoElement.value = damageData[clave].concepto;
        medidaElement.value = damageData[clave].medida;
        if (precioUnitarioElement) {
            precioUnitarioElement.value = damageData[clave].valor;  // Mantener el valor numérico para los cálculos
        }
        // Actualizar el campo con el formato si está presente
        const precioUnitarioDisplay = document.getElementById('precio-unitario-display');
        if (precioUnitarioDisplay) {
            precioUnitarioDisplay.value = formatCurrency(damageData[clave].valor);  // Solo para mostrar con formato
        }
    } else {
        conceptoElement.value = 'Concepto no encontrado';
        medidaElement.value = '';
        if (precioUnitarioElement) {
            precioUnitarioElement.value = '';  // Dejamos el campo vacío si no se encuentra la clave
        }
        // Limpiar el campo con formato si no se encuentra el precio
        const precioUnitarioDisplay = document.getElementById('precio-unitario-display');
        if (precioUnitarioDisplay) {
            precioUnitarioDisplay.value = '';  // Dejamos también vacío el campo con el formato
        }
    }
}

// Función para formatear los valores con signo de pesos y comas
function formatCurrency(value) {
    return '$' + value.toLocaleString();  // Usamos toLocaleString para formatear con comas y agregar el signo de pesos
}

document.getElementById('damageForm').addEventListener('input', function() {
    const cantidad = parseFloat(document.getElementById('cantidad-dano').value) || 0;
    const precioUnitario = parseFloat(document.getElementById('precio-unitario-display').value.replace(/\$|\,/g, '')) || 0;  // Obtenemos el valor formateado y lo convertimos a número
    
    // Calcular el subtotal
    const subtotal = cantidad * precioUnitario;
    document.getElementById('subtotal-display').value = formatCurrency(subtotal);  // Solo para mostrar con formato

    // Calcular el total (esto se podría sumar con más subtotales si fuera necesario)
    const total = subtotal; 
    document.getElementById('total').value = total.toFixed(2);  // Mantenemos el valor numérico para los cálculos
    document.getElementById('total-display').value = formatCurrency(total);  // Solo para mostrar con formato
});





document.getElementById('damageForm').addEventListener('input', function() {
    const cantidad = parseFloat(document.getElementById('cantidad-dano').value) || 0;
    
    // Obtenemos el valor del precio unitario con formato
    const precioUnitarioDisplay = document.getElementById('precio-unitario-display');
    const precioUnitario = parseFloat(precioUnitarioDisplay.value.replace(/\$|\,/g, '')) || 0;  // Obtenemos el valor formateado y lo convertimos a número
    
    // Calcular el subtotal
    const subtotal = cantidad * precioUnitario;
    const subtotalDisplay = document.getElementById('subtotal-display');
    if (subtotalDisplay) {
        subtotalDisplay.value = formatCurrency(subtotal);  // Solo para mostrar con formato
    }

    // Calcular el total (esto se podría sumar con más subtotales si fuera necesario)
    const total = subtotal; 
    const totalDisplay = document.getElementById('total-display');
    if (totalDisplay) {
        totalDisplay.value = formatCurrency(total);  // Solo para mostrar con formato
    }
});




// Función para agregar un nuevo daño
function addDamage() {
    const damageSectionContainer = document.getElementById('damageSectionContainer');
    const firstDamageSection = document.getElementById('damage1');
    const newDamageSection = firstDamageSection.cloneNode(true);
    
    // Limpiar los campos del nuevo daño
    const inputs = newDamageSection.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
        input.disabled = false;
    });
    
    // Añadir el nuevo daño al contenedor
    damageSectionContainer.appendChild(newDamageSection);
}

// Función para formatear los valores con signo de pesos y comas
function formatCurrency(value) {
    return '$' + value.toLocaleString();
}




// Función para agregar un nuevo daño
function addDamage() {
    const damageSectionContainer = document.getElementById('damageSectionContainer');
    const firstDamageSection = document.getElementById('damage1'); // La primera sección de daño
    const newDamageSection = firstDamageSection.cloneNode(true);  // Clonamos la primera sección de daño
    
    // Limpiar los campos del nuevo daño
    const inputs = newDamageSection.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';        // Limpiar el valor de los campos
        input.disabled = false;  // Asegurarnos de que los campos no estén deshabilitados
    });

    // Limpiar los campos con clase 'concepto-dano' en el nuevo daño
    const conceptoFields = newDamageSection.querySelectorAll('.concepto-dano');
    conceptoFields.forEach(field => {
        field.value = '';  // Limpiar el valor del campo 'concepto'
    });

    // Añadir el nuevo daño al contenedor
    damageSectionContainer.appendChild(newDamageSection);

    // Reasignar los eventos de 'oninput' a los nuevos campos
    const newClaveInput = newDamageSection.querySelector('.clave-dano');
    const newCantidadInput = newDamageSection.querySelector('.cantidad-dano');
    
    // Añadir el evento 'input' para que funcione con los nuevos campos clonados
    newClaveInput.addEventListener('input', function() {
        updateDamageConcept(this); // Llamar a la función para actualizar el concepto basado en la clave
    });

    newCantidadInput.addEventListener('input', function() {
        calculateSubtotal(this); // Calcular subtotal en función de la cantidad
    });
}

// Función para actualizar el concepto, medida y precio unitario según la clave ingresada
function updateDamageConcept(input) {
    const clave = input.value;
    const conceptoElement = input.closest('.section').querySelector('.concepto-dano');
    const medidaElement = input.closest('.section').querySelector('.medida-dano');
    const precioUnitarioDisplay = input.closest('.section').querySelector('.precio-unitario-display');
    
    if (damageData[clave]) {
        conceptoElement.value = damageData[clave].concepto;
        medidaElement.value = damageData[clave].medida;
        precioUnitarioDisplay.value = formatCurrency(damageData[clave].valor);  // Formato de moneda
    } else {
        conceptoElement.value = 'Concepto no encontrado';
        medidaElement.value = '';
        precioUnitarioDisplay.value = '';  // Limpiar el precio si no se encuentra la clave
    }
}

// Función para calcular el subtotal
function calculateSubtotal(input) {
    const cantidad = parseFloat(input.value) || 0;
    const precioUnitarioDisplay = input.closest('.section').querySelector('.precio-unitario-display');
    const precioUnitario = parseFloat(precioUnitarioDisplay.value.replace(/\$|\,/g, '')) || 0;  // Obtener el precio numérico

    const subtotal = cantidad * precioUnitario;
    const subtotalDisplay = input.closest('.section').querySelector('.subtotal-display');
    subtotalDisplay.value = formatCurrency(subtotal);  // Mostrar con formato

    // Calcular el total (esto se podría sumar con más subtotales si fuera necesario)
    const total = subtotal;
    const totalDisplay = document.getElementById('total-display');
    if (totalDisplay) {
        totalDisplay.value = formatCurrency(total);  // Mostrar el total con formato
    }
}

// Función para formatear los valores con signo de pesos y comas
function formatCurrency(value) {
    return '$' + value.toLocaleString();  // Usamos toLocaleString para formatear con comas y agregar el signo de pesos
}




// Función para agregar un nuevo daño
function addDamage() {
    const damageSectionContainer = document.getElementById('damageSectionContainer');
    const firstDamageSection = document.getElementById('damage1');
    const newDamageSection = firstDamageSection.cloneNode(true);

    // Limpiar los campos del nuevo daño
    const inputs = newDamageSection.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
        input.disabled = false;
    });

    // Añadir el nuevo daño al contenedor
    damageSectionContainer.appendChild(newDamageSection);

    // Reasignar los eventos de 'oninput' a los nuevos campos
    const newClaveInput = newDamageSection.querySelector('.clave-dano');
    const newCantidadInput = newDamageSection.querySelector('.cantidad-dano');
    
    // Añadir el evento 'input' para que funcione con los nuevos campos clonados
    newClaveInput.addEventListener('input', function() {
        updateDamageConcept(this); // Llamar a la función para actualizar el concepto basado en la clave
    });

    newCantidadInput.addEventListener('input', function() {
        calculateSubtotal(this); // Calcular subtotal en función de la cantidad
    });
}

// Llamar a la función para asegurar que el primer cuadro de daño también tenga el evento
document.addEventListener('DOMContentLoaded', function() {
    const firstDamageSection = document.getElementById('damage1');
    const firstCantidadInput = firstDamageSection.querySelector('.cantidad-dano');
    firstCantidadInput.addEventListener('input', function() {
        calculateSubtotal(this); // Calcula subtotal cuando cambia la cantidad
    });

    const firstClaveInput = firstDamageSection.querySelector('.clave-dano');
    firstClaveInput.addEventListener('input', function() {
        updateDamageConcept(this); // Actualiza el concepto cuando cambia la clave
    });
});







// Función para calcular el total de todos los subtotales de los daños
function calcularTotalDaños() {
    const subtotales = document.querySelectorAll('.subtotal-display'); // Todos los campos de subtotal
    let total = 0;

    // Iterar sobre todos los subtotales y sumarlos
    subtotales.forEach(function(subtotal) {
        const valorSubtotal = parseFloat(subtotal.value.replace('$', '').replace(',', '')); // Convertir a número
        if (!isNaN(valorSubtotal)) { // Asegurarse de que el valor es un número
            total += valorSubtotal;
        }
    });

    // Mostrar el total en el campo de "Total General"
    const totalDisplay = document.getElementById('total-general');
    totalDisplay.value = formatCurrency(total); // Formatear como moneda
}

// Función para formatear los valores con signo de pesos y comas
function formatCurrency(value) {
    return '$' + value.toLocaleString(); // Usamos toLocaleString para formatear con comas y agregar el signo de pesos
}

// Función para actualizar el subtotal de cada sección
function actualizarSubtotal(input) {
    const cantidad = parseFloat(input.closest('.section').querySelector('.cantidad-dano').value) || 0;
    const precioUnitario = parseFloat(input.closest('.section').querySelector('.precio-unitario-display').value.replace('$', '').replace(',', '')) || 0;

    const subtotal = cantidad * precioUnitario;

    const subtotalDisplay = input.closest('.section').querySelector('.subtotal-display');
    subtotalDisplay.value = formatCurrency(subtotal); // Mostrar el subtotal con el formato adecuado

    calcularTotalDaños(); // Actualizar el total general después de calcular el subtotal
}

// Agregar eventos para actualizar los subtotales y el total general cuando cambian los valores
document.querySelectorAll('.cantidad-dano, .precio-unitario-display').forEach(input => {
    input.addEventListener('input', function() {
        actualizarSubtotal(this);
    });
});

// Función para agregar un nuevo daño
function addDamage() {
    const damageSectionContainer = document.getElementById('damageSectionContainer');
    const firstDamageSection = document.getElementById('damage1');
    const newDamageSection = firstDamageSection.cloneNode(true);
    
    // Limpiar los campos del nuevo daño
    const inputs = newDamageSection.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
        input.disabled = false;
    });
    
    // Añadir el nuevo daño al contenedor
    damageSectionContainer.appendChild(newDamageSection);

    // Reasignar los eventos de 'oninput' a los nuevos campos
    const newClaveInput = newDamageSection.querySelector('.clave-dano');
    const newCantidadInput = newDamageSection.querySelector('.cantidad-dano');
    
    // Añadir el evento 'input' para que funcione con los nuevos campos clonados
    newClaveInput.addEventListener('input', function() {
        updateDamageConcept(this); // Llamar a la función para actualizar el concepto basado en la clave
    });

    newCantidadInput.addEventListener('input', function() {
        actualizarSubtotal(this); // Calcular subtotal en función de la cantidad
    });
}

// Función para actualizar el concepto, medida y precio unitario según la clave ingresada
function updateDamageConcept(input) {
    const clave = input.value;
    const conceptoElement = input.closest('.section').querySelector('.concepto-dano');
    const medidaElement = input.closest('.section').querySelector('.medida-dano');
    const precioUnitarioDisplay = input.closest('.section').querySelector('.precio-unitario-display');
    
    if (damageData[clave]) {
        conceptoElement.value = damageData[clave].concepto;
        medidaElement.value = damageData[clave].medida;
        precioUnitarioDisplay.value = formatCurrency(damageData[clave].valor);  // Formato de moneda
    } else {
        conceptoElement.value = 'Concepto no encontrado';
        medidaElement.value = '';
        precioUnitarioDisplay.value = '';  // Limpiar el precio si no se encuentra la clave
    }
}

// Función para calcular el subtotal de la sección
function calculateSubtotal(input) {
    const cantidad = parseFloat(input.value) || 0;
    const precioUnitarioDisplay = input.closest('.section').querySelector('.precio-unitario-display');
    const precioUnitario = parseFloat(precioUnitarioDisplay.value.replace('$', '').replace(',', '')) || 0;

    const subtotal = cantidad * precioUnitario;
    const subtotalDisplay = input.closest('.section').querySelector('.subtotal-display');
    subtotalDisplay.value = formatCurrency(subtotal); // Mostrar el subtotal con el formato adecuado

    calcularTotalDaños(); // Actualizar el total general después de calcular el subtotal
}




// Datos de personal con claves y sus respectivos nombres
const personalData = {
    '86': 'Arq. Alvaro Villegas Torres, Superintendente',
    '87': 'José Armando Sanchez Sanchez, Sobrestante/Cabo',
    '36': 'Jorge David Negrete Borunda, Administrador de la Plaza de Cobro Num. 26'
};

// Función para actualizar la información de los recuadros de "Personal"
function updatePersonalInfo() {
    // Obtener las claves ingresadas
    const validaClave = document.getElementById('valida-danos-clave').value;
    const evaluacionClave = document.getElementById('elaboro-evaluacion-clave').value;
    const recibeClave = document.getElementById('recibe-plaza-clave').value;
    
    // Llenar los campos correspondientes con los nombres
    if (personalData[validaClave]) {
        document.getElementById('valida-danos').value = personalData[validaClave];
    } else {
        document.getElementById('valida-danos').value = ''; // Limpiar si no se encuentra la clave
    }

    if (personalData[evaluacionClave]) {
        document.getElementById('elaboro-evaluacion').value = personalData[evaluacionClave];
    } else {
        document.getElementById('elaboro-evaluacion').value = ''; // Limpiar si no se encuentra la clave
    }

    if (personalData[recibeClave]) {
        document.getElementById('recibe-plaza').value = personalData[recibeClave];
    } else {
        document.getElementById('recibe-plaza').value = ''; // Limpiar si no se encuentra la clave
    }
}

// Crear el PDF con la información del formulario
function generatePDF() {
    // Creamos una nueva instancia del PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Datos del formulario
    const plazaCobro = document.getElementById('plaza-cobro').value;
    const folioBoletin = document.getElementById('folio-boletin').value;
    const reporteAseguradora = document.getElementById('reporte-aseguradora').value;
    const numeroSiniestro = document.getElementById('numero-siniestro').value;
    const clave = document.getElementById('clave').value;
    const concepto = document.getElementById('concepto').value;
    const kilometro = document.getElementById('kilometro').value;
    const cuerpo = document.getElementById('cuerpo').value;
    const horaSiniestro = document.getElementById('hora-siniestro').value;
    const fechaSiniestro = document.getElementById('fecha-siniestro').value;

    // Datos de los recuadros de personal
    const validaDanossClave = document.getElementById('valida-danos-clave').value;
    const validaDanoss = document.getElementById('valida-danos').value;
    const elaboroEvaluacionClave = document.getElementById('elaboro-evaluacion-clave').value;
    const elaboroEvaluacion = document.getElementById('elaboro-evaluacion').value;
    const recibePlazaClave = document.getElementById('recibe-plaza-clave').value;
    const recibePlaza = document.getElementById('recibe-plaza').value;

    // Datos de los daños causados al camino
    const claveDano = document.getElementById('clave-dano').value;
    const conceptoDano = document.getElementById('concepto-dano').value;
    const cantidadDano = document.getElementById('cantidad-dano').value;
    const medidaDano = document.getElementById('medida-dano').value;
    const precioUnitarioDano = document.getElementById('precio-unitario-display').value;
    const subtotalDano = document.getElementById('subtotal-display').value;

    // Configurar el PDF
    doc.setFontSize(16);
    doc.text('Formulario de Cuantificación de Daños', 20, 20);

    // Información del reporte
    doc.setFontSize(12);
    doc.text('Información del Reporte:', 20, 30);
    doc.text(`Plaza de Cobro: ${plazaCobro}`, 20, 40);
    doc.text(`Folio de Boletín: ${folioBoletin}`, 20, 50);
    doc.text(`Reporte de Aseguradora: ${reporteAseguradora}`, 20, 60);
    doc.text(`Número de Siniestro: ${numeroSiniestro}`, 20, 70);

    doc.text('Datos del Accidente:', 20, 80);
    doc.text(`Clave: ${clave}`, 20, 90);
    doc.text(`Concepto: ${concepto}`, 20, 100);
    doc.text(`Kilómetro: ${kilometro}`, 20, 110);
    doc.text(`Cuerpo: ${cuerpo}`, 20, 120);
    doc.text(`Hora del Siniestro: ${horaSiniestro}`, 20, 130);
    doc.text(`Fecha del Siniestro: ${fechaSiniestro}`, 20, 140);

    // Datos de los recuadros de personal
    doc.text('Validación de Daños:', 20, 150);
    doc.text(`Clave: ${validaDanossClave}`, 20, 160);
    doc.text(`Valida Daños: ${validaDanoss}`, 20, 170);

    doc.text('Elaboración de Evaluación de Daños:', 20, 180);
    doc.text(`Clave: ${elaboroEvaluacionClave}`, 20, 190);
    doc.text(`Elaboró Evaluación de Daños: ${elaboroEvaluacion}`, 20, 200);

    doc.text('Recepción en Plaza de Cobro:', 20, 210);
    doc.text(`Clave: ${recibePlazaClave}`, 20, 220);
    doc.text(`Recibe en Plaza de Cobro: ${recibePlaza}`, 20, 230);

  
}

// Crear el PDF con la información del formulario
function generatePDF() {
    // Creamos una nueva instancia del PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Datos del formulario
    const plazaCobro = document.getElementById('plaza-cobro').value;
    const folioBoletin = document.getElementById('folio-boletin').value;
    const reporteAseguradora = document.getElementById('reporte-aseguradora').value;
    const numeroSiniestro = document.getElementById('numero-siniestro').value;
    const clave = document.getElementById('clave').value;
    const concepto = document.getElementById('concepto').value;
    const kilometro = document.getElementById('kilometro').value;
    const cuerpo = document.getElementById('cuerpo').value;
    const horaSiniestro = document.getElementById('hora-siniestro').value;
    const fechaSiniestro = document.getElementById('fecha-siniestro').value;

    // Datos de los recuadros de personal
    const validaDanossClave = document.getElementById('valida-danos-clave').value;
    const validaDanoss = document.getElementById('valida-danos').value;
    const elaboroEvaluacionClave = document.getElementById('elaboro-evaluacion-clave').value;
    const elaboroEvaluacion = document.getElementById('elaboro-evaluacion').value;
    const recibePlazaClave = document.getElementById('recibe-plaza-clave').value;
    const recibePlaza = document.getElementById('recibe-plaza').value;

    // Configuramos el contenido del PDF
    doc.setFontSize(18);
    doc.text('Formulario de Cuantificación de Daños', 14, 20);

    doc.setFontSize(12);
    doc.text('Información del Reporte:', 14, 30);
    doc.text(`Plaza de Cobro: ${plazaCobro}`, 14, 40);
    doc.text(`Folio de Boletín: ${folioBoletin}`, 14, 50);
    doc.text(`Reporte de Aseguradora: ${reporteAseguradora}`, 14, 60);
    doc.text(`Número de Siniestro: ${numeroSiniestro}`, 14, 70);

    doc.text('Datos del Accidente:', 14, 80);
    doc.text(`Clave: ${clave}`, 14, 90);
    doc.text(`Concepto: ${concepto}`, 14, 100);
    doc.text(`Kilómetro: ${kilometro}`, 14, 110);
    doc.text(`Cuerpo: ${cuerpo}`, 14, 120);
    doc.text(`Hora del Siniestro: ${horaSiniestro}`, 14, 130);
    doc.text(`Fecha del Siniestro: ${fechaSiniestro}`, 14, 140);

    // Datos de los recuadros de personal
    doc.text('Validación de Daños:', 14, 150);
    doc.text(`Clave: ${validaDanossClave}`, 14, 160);
    doc.text(`Valida Daños: ${validaDanoss}`, 14, 170);

    doc.text('Elaboración de Evaluación de Daños:', 14, 180);
    doc.text(`Clave: ${elaboroEvaluacionClave}`, 14, 190);
    doc.text(`Elaboró Evaluación de Daños: ${elaboroEvaluacion}`, 14, 200);

    doc.text('Recepción en Plaza de Cobro:', 14, 210);
    doc.text(`Clave: ${recibePlazaClave}`, 14, 220);
    doc.text(`Recibe en Plaza de Cobro: ${recibePlaza}`, 14, 230);

    // Generar el PDF
    doc.save('cuantificacion_de_danos.pdf');
}


  // Ahora vamos a guardar los datos en la base de datos
  saveToDatabase(plazaCobro, folioBoletin, reporteAseguradora, numeroSiniestro, clave, concepto, kilometro, cuerpo, horaSiniestro, fechaSiniestro, validaDanoss, elaboroEvaluacion, recibePlaza);


// Función para guardar los datos en la base de datos
function saveToDatabase(plazaCobro, folioBoletin, reporteAseguradora, numeroSiniestro, clave, concepto, kilometro, cuerpo, horaSiniestro, fechaSiniestro, validaDanoss, elaboroEvaluacion, recibePlaza) {
    const formData = new FormData();

    // Añadir los datos del formulario
    formData.append('plaza_cobro', plazaCobro);
    formData.append('folio_boletin', folioBoletin);
    formData.append('reporte_aseguradora', reporteAseguradora);
    formData.append('numero_siniestro', numeroSiniestro);
    formData.append('clave', clave);
    formData.append('concepto', concepto);
    formData.append('kilometro', kilometro);
    formData.append('cuerpo', cuerpo);
    formData.append('hora_siniestro', horaSiniestro);
    formData.append('fecha_siniestro', fechaSiniestro);
    formData.append('valida_danos', validaDanoss);
    formData.append('elaboro_evaluacion', elaboroEvaluacion);
    formData.append('recibe_plaza', recibePlaza);

    // Enviar los datos al servidor (archivo PHP)
    fetch('GuardarReporte.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Redirigir a la página de Base de Datos después de guardar
        if (data.success) {
            window.location.href = 'BaseDatos.html';
        } else {
            alert('Hubo un error al guardar el reporte.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// Después de guardar el PDF, redirigir a la página de Base de Datos
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();


    // Después de crear el PDF, redirigir
    window.location.href = "BaseDatos.html";
}