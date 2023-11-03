// Selectores

const marca = document.querySelector("#marca")
const year = document.querySelector("#year")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color")

const contenedor = document.querySelector("#resultado")



document.addEventListener("DOMContentLoaded" , ()=>{
    mostrarCoches(coches)
})



const datosBusqueda = {
    marca : ``,
    year: ``,
    minimo:``,
    maximo:``,
    precio:``,
    puertas:``,
    transmision:``,
    color: ``
  
}

// Crear los años select
const years = document.createElement("option")
const max = new Date().getFullYear()
const min = max - 10

for (let i = max; i>= min; i--){
    const option = document.createElement("option")
    option.value = i
    option.textContent = i
    year.appendChild(option)
    
}
// Listeners

marca.addEventListener("input", (e) => {
    datosBusqueda.marca = e.target.value
    filtrarCoches();
})
year.addEventListener("input", (e) => {
    datosBusqueda.year = parseInt(e.target.value)
    filtrarCoches();
})
minimo.addEventListener("input", (e) => {
    datosBusqueda.precio = parseInt(e.target.value)
    filtrarCoches();
})
maximo.addEventListener("input", (e) => {
    datosBusqueda.maximo = parseInt(e.target.value)
    filtrarCoches();
})
puertas.addEventListener("input", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarCoches();
})
transmision.addEventListener("input", (e) => {
    datosBusqueda.transmision = e.target.value
    filtrarCoches();
})
color.addEventListener("input", (e) => {
    datosBusqueda.color = e.target.value
    filtrarCoches();
})

//Funciones
function limpiarHTML(){
    while ( contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}
function mostrarCoches(coches){
    limpiarHTML()
    coches.forEach(coche =>{
        const cocheHTML = document.createElement("p")
        cocheHTML.innerHTML = 
        `<p>${coche.marca} - ${coche.color} - ${coche.modelo} - ${coche.precio} - ${coche.puertas} - ${coche.transmision} - ${coche.year}</p>` 
        contenedor.appendChild(cocheHTML);
    })

}

function filtrarCoches(){
    const resultado = coches
        .filter(filtrarMarca)
        .filter(filtraYear)
        .filter(filtraMaximo)
        .filter(filtraMnimo)
        .filter(filtraColor)
        .filter(filtraPuertas)
        .filter(filtraTransmision)
    if (resultado.length){
        mostrarCoches(resultado)
    }else{
        noResultado()
    }
   
}

function filtrarMarca (coche){
    if (datosBusqueda.marca) {
        return coche.marca === datosBusqueda.marca
    }
    return coche
    
}
function filtraYear (coche){
    if (datosBusqueda.year) {
        return coche.year === datosBusqueda.year
    }
    return coche
    
}
function filtraMnimo (coche){
    if (datosBusqueda.minimo) {
        return coche.minimo >= datosBusqueda.minimo
    }
    return coche
}
function filtraMaximo (coche){
    if (datosBusqueda.maximo) {
        return coche.precio <= datosBusqueda.maximo
    }
    return coche
}
function filtraPuertas (coche){
    if (datosBusqueda.puertas) {
        return coche.puertas === datosBusqueda.puertas
    }
    return coche
}
function filtraTransmision (coche){
    if (datosBusqueda.transmision) {
        return coche.transmision === datosBusqueda.transmision
    }
    return coche
}
function filtraColor (coche){
    if (datosBusqueda.color) {
        return coche.color === datosBusqueda.color
    }
    return coche
    
}

function noResultado(){
    limpiarHTML()
    const noResultado = document.createElement("div")
    noResultado.classList.add("alerta","error")
    noResultado.textContent = "No hay resultado"
    contenedor.appendChild(noResultado)
}