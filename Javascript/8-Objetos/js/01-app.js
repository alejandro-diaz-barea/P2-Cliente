// Como crear y acceder a los valores de un objeto.

"use strict";
const name = "Monitor 20";
const price = 20;
const available = true;

// Object literal => Existe tb el onject constructor, lo veremos luego.
const producto = {
  name: "Monitor 20",
  price: 20,
  available: true,
  "estado producto": "disponible", // cuidado con los espacios, solo podemos acceder a ellos
  // con notación de corchetes.
};

console.log(producto);
console.log(producto.name); // Es la sintaxis mas común para acceder a los objetos.
console.log(producto.price);
console.log(producto["price"]); // Es menos común.

console.log(producto["estado producto"]); // Este caso sería la única exepción a usar la notación []

// Agregamos propiedades en ejecución
producto.color = "verde"; // obviamente si la propiedad existe, la sobreescribe

// Eliminamos una propiedad
delete producto.available;
console.log(producto);
