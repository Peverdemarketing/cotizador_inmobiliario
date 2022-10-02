

function seleccionarProyecto() {
    let selectorProyecto = document.getElementById('proyecto');
    let nombre_proyecto = proyecto.value;
    
    if (nombre_proyecto == 'golf') {
        const img = document.createElement('img');
        img.src = '../assets/golf.png';
        img.src = '../assets/golf1.png';
        document.querySelector('#imagenProyectoDom').appendChild(img);
        document.getElementById('textoProyecto').innerHTML = `Seleccionaste el proyecto ${nombre_proyecto}. Tiene 3 Dormitorios y 2 baños, a 5 minutos del Club de Golf los Alcones`;
    } else if(nombre_proyecto === 'mar') {
        const img = document.createElement('img');
        img.src = '/assets/mar.png'; 
        img.src = '/assets/mar1.png'; 
        // document.querySelector('#imagenProyectoDom').remove(img);       
        document.querySelector('#imagenProyectoDom').appendChild(img);
        document.getElementById('textoProyecto').innerHTML = `Seleccionaste el proyecto ${nombre_proyecto}. Tiene 4 Dormitorios y 2 baños, con preciosa vista al mar.`;
    } else if(nombre_proyecto === 'providencia') {
        const img = document.createElement('img');
        img.src = '../assets/providencia.png';
        img.src = '../assets/providencia1.png';
        document.querySelector('#imagenProyectoDom').appendChild(img); 
        document.getElementById('textoProyecto').innerHTML = `Seleccionaste el proyecto ${nombre_proyecto}. Tiene 2 Dormitorios y 2 baños, con acceso a un jardín para la familia.`;
    } else if(nombre_proyecto === 'vitacura') {
        const img = document.createElement('img');
        img.src = '../assets/vitacura.png';
        img.src = '../assets/vitacura1.png';
        document.querySelector('#imagenProyectoDom').appendChild(img);
        document.getElementById('textoProyecto').innerHTML = `Seleccionaste el proyecto ${nombre_proyecto}. Tiene 3 Dormitorios y 2 baños, cerca de centros comerciales y restaurantes de primer nivel.`;
    } else {
        console.log("Debe elegir un proyecto")
    }          
    
    
    
}








// function encontrarImagen(nombre_proyecto) {
//     const key = '30268475-f0319698f9505345c83f6ca9f';
//     const url = `https://pixabay.com/api/?key=${key}&q=${proyecto}`;
    



// Golf: https://pixabay.com/photos/golf-green-field-grass-sports-3683338/
// Viña: https://pixabay.com/photos/pier-sea-sunset-jetty-fog-coast-1467984/ 
// Vitacura: https://pixabay.com/photos/shopping-mall-square-mall-center-1126485/
// Providencia: https://pixabay.com/photos/bridge-park-garden-japanese-garden-53769/







