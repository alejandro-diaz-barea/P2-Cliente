// Objeto dentro de un objeto

"use strict";

const producto = {
  name: "Monitor 20",
  price: 20,
  available: true,
  information: {
    peso: "1 kg",
    medida: "10 cm",
    origin: {
      pais: "ES",
    },
  },
};

console.log(producto)
console.log(producto.information)
console.log(producto.information.peso)
console.log(producto.information.origin.pais)


// let { name, information } = producto
// console.log(name)
// console.log(information)

// let { name, information.medida } = producto // Mo es una sintaxis válida


// let { name, information : { origin } } = producto
// console.log(name)
// console.log(origin)

// let { name, information : { origin } } = producto // Ojo, esto no crea la variable information, solo name y origin. Para crearla tendríamos que poner:
// let { name, information, information : { origin } } = producto


const { name, information: { origin: { pais }}} = producto;
console.log(pais);


// const {
//   name,
//   information: {
//     origin: { pais },
//   },
// } = producto;
// console.log(pais);

