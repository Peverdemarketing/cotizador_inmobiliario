const promocion = document.querySelector("#promocion")

fetch("js/promociones.json")
.then((res)=>res.json())
.then((promociones)=>{
    promociones.forEach((inmueble)=>{
        const p = document.createElement("p")
        p.innerHTML=`
        <h5>  ${inmueble.nombreProyecto} <svg class="w-6 h-6" fill="none" stroke="currentColor" width="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg> </h5>
        <h6> Al agendar accedes a la promoción vigente que consta de: ${inmueble.promocion}</h6>
        `
        promocion.append(p)
    })

})

