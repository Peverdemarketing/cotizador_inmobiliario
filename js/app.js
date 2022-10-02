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
        console.table(this.citas);
    }

    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
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
 



            // boton eliminar

            const botonEliminar = document.createElement('button');
            botonEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
            botonEliminar.classList.add('btn', 'btn-danger', 'mr-2', 'pd-3');
            botonEliminar.innerHTML = 'Eliminar Cita <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';


            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(cita);
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            
            // Parrafor div cita

            divCita.appendChild(nombreParrafo);
            divCita.appendChild(proyectoParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(caracteristicasParrafo);
            divCita.appendChild(botonEliminar);



            // Agregar cita a html

            contenedorCitas.appendChild(divCita);
        })
        console.table(citas);
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




// Variable inicializada en falso de editar
let editando = false;


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

    // local storage funcion
    localStorageGuardado()
}


// LOCAL STORAGE
function localStorageGuardado() {
        localStorage.setItem('Cita', JSON.stringify(administrarCitas));
}


//Ubicar posición del arreglo en local storage


// LOCAL STORAGE ELIMINAR
function localStorageEliminar(id){
    localStorage.clear('data-id', JSON.stringify(administrarCitas));
}


function eliminarCita(id) {
    administrarCitas.eliminarCita(id);
    localStorageEliminar(id);
    ui.imprimirCitas(administrarCitas);
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
