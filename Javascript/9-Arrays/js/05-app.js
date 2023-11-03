// Supongamos que creamos un carrito de compras, más adelante lo haremos ya desde una interfaz web.
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 500,
};

const producto2 = {
  nombre: "Telefono X",
  precio: 500,
};

// Añadir al Inicio del carrito...
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

// Añadir al final del carrito...
carrito.unshift(producto3);

console.log(carrito);

// Existen otras formas más modernas de hacerlo, pero esta sintaxis aún se utiliza mucho.
// Veamos ahora formas mas modernas ...

