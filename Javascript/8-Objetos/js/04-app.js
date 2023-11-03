// El problema de los objetos
// Recordar que una variable declarada con const no se puede modificar, pero con los objtos si.... Ya vimos antes que se podía.

// Freezing an object

"use strict";

// use strict recordemos que habilita el modo estricto, digams que evita malas prácticas.
// x=10
// console.log(x)

const producto = {
  name: "Monitor 20",
  price: 20,
  available: true,
};

// Hacer que un objecto se comporte como una constante
// Lo primero es tener habilitado el modo estricto para tener acceso a los objects methods

Object.freeze(producto);  // Freeze no permite que se añadan, borren o modifiquen propiedades del objeto.
producto.available = false;
console.log(producto.available);

delete producto.name // Nos dará error

// Si no tengo el modo estricto habilitado y uso el freeze, no va a dar error,
// pero tampoco va a hacer los cambios en el objeto.

console.log(Object.isFrozen(producto)); // Para saber si un objeto está congelado
