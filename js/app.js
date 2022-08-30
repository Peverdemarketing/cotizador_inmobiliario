// Inputs del formulario

const nombreInput = document.querySelector('#nombre'); 
const proyectoInput = document.querySelector('#proyecto'); 
const telefonoInput = document.querySelector('#telefono'); 
const fechaInput = document.querySelector('#fecha'); 
const horaInput = document.querySelector('#hora'); 
const caracteristicasInput = document.querySelector('#caracteristicas'); 

// Usuario
const formulario = document.querySelector("#agendar")
const contenedorCitas = document.querySelector("#citas")


class Citas {
    constructor() {
        this.citas = [];
    }

    agendarCita(cita) {
        this.citas = [...this.citas, cita];
        // Esto sirve para ver como se van añadiendo las citas
        console.log(this.citas);
    }

}


class UI {

    imprimirAlerta(mensaje, tipo) {

        // esto crea el div
        const divMensaje = document.createElement('div')
        // esto crea las clases en ese div
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // si es error agregar clase

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        // Agrega mensaje
        divMensaje.textContent = mensaje;
        // DOM
        document.querySelector('#caja').insertBefore(divMensaje, document.querySelector('.agregar-cita'))
        // QUITAR ALERTA EN 3 SEGUNDOS

        setTimeout (() => { divMensaje.remove()}, 3000);
    
    }

    // Imprimir citas reservadas
    imprimirCitas({citas}) {

        this.vaciarHTML();

        citas.forEach( cita => { 
            const { nombre, proyecto, telefono, fecha, hora, caracteristicas, id} = cita;
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;



            // Escribbir en documento
            const nombreParrafo = document.createElement('h2');
            nombreParrafo.classList.add('card-title');
            nombreParrafo.innerHTML = `${nombre}`;


            
            const proyectoParrafo = document.createElement('div');
            proyectoParrafo.innerHTML = `Proyecto o Ubicación: ${proyecto}`; 


            const telefonoParrafo = document.createElement('div')
            telefonoParrafo.innerHTML = `<span> Telefono: </span> ${telefono}`; 

            const fechaParrafo = document.createElement('div')
            fechaParrafo.innerHTML = `<span> Fecha: </span> ${fecha}`; 

            const horaParrafo = document.createElement('div')
            horaParrafo.innerHTML = `<span> Hora: </span> ${hora}`; 

            const caracteristicasParrafo = document.createElement('div')
            caracteristicasParrafo.innerHTML = `<span> Caracteristicas: </span> ${caracteristicas}`; 
 


            // Parrafor div cita

            divCita.appendChild(nombreParrafo);
            divCita.appendChild(proyectoParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(caracteristicasParrafo);

            // Agregar cita a html

            contenedorCitas.appendChild(divCita);
        })
        console.log(citas);
    }
    vaciarHTML() {
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas();

// Escuchador de eventos por ID

eventListeners();

function eventListeners() {
    nombreInput.addEventListener('input', datosCita);
    proyectoInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    caracteristicasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', agendarCita)
}


// Objeto para enviar datos de agendamiento

const citaObj = {
    nombre: '',
    proyecto: '',
    telefono: '',
    fecha: '',
    hora: '',
    caracteristicas: '',
}


// Se va llamando por cada dato agregado al input, la "e" es por evento

// Esto hace que vaya escribiendo en el objeto
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;

    // console.log(citaObj)
}


// Agregar una nueva cita luego de validarla

function agendarCita(e) {
    e.preventDefault();

    // Obtener información del objeto de cita
    const { nombre, proyecto, telefono, fecha, hora, caracteristicas} = citaObj
    // Esto sirve para validar que no esten vacios
    if (nombre === '' || proyecto === '' || telefono == '' || fecha === '' || hora === '' || caracteristicas === '') {
        ui.imprimirAlerta("Todos los campos son obligatorios", 'error')
        // Return para evitar que avance a la siguiente linea
        return;
    }
    // Agendando una nueva cita

    citaObj.id =  Date.now();

    // Con (spread) ... agregamos una copia y evito sobreescribir
    administrarCitas.agendarCita({...citaObj});
 
    // Mostrar HTML de las citas
    ui.imprimirCitas(administrarCitas);
    
    // Reiniciar objeto
    reiniciarObjeto();
    // Resetear
    formulario.reset();



}


// Quitarle valores al objeto
function reiniciarObjeto() {
    citaObj.nombre = '';
    citaObj.proyecto = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.caracteristicas = '';
}