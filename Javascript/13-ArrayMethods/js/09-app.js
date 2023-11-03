// Reduce para encontrar valores repetidos

const nombres = [
  "Pepe",
  "Maria",
  "Luis",
  "Pepe",
  "Juan",
  "Jose",
  "Jose",
  "Jose",
];

const cantidadNombres = nombres.reduce((contadorNombre, nombre, index) => {
  console.log(`Iteracion numero: ${index}`);
  console.log(contadorNombre[nombre]);
  console.log(contadorNombre[nombre] || 0);
  console.log(".............");
  contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
  return contadorNombre;
}, {});

console.log(cantidadNombres);

// contadorNombre = {
// Maria: 1
// Pepe:2

// }
