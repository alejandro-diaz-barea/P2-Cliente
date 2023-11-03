// Local vs session

localStorage.setItem("nombre","manuel") // se mantiene tras cerrar la pantalla

sessionStorage.setItem("nombre","pepe") // se borra cuando cierra

const producto = {
    nombre:"Manuel",
    nacionalidad:"ESP"
}

localStorage.setItem("ListaCompra", producto)

const meses = ["Enero", "Febrero","Marzo"]

localStorage.setItem("Meses", )