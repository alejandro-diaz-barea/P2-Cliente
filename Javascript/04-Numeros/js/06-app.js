// Veamos un par de funciones para convertir a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);

console.log(typeof (numero1)) // Typeof nos dice de que tipo es el dato.

console.log(typeof (numero4)) // number es un objeto, como math. 

console.log(number)

// Convertir de Strings a números flotantes o enteros

console.log(Number.parseInt(numero1)); // Convertir de String a Número
console.log(Number.parseFloat(numero2)); // Convertir a número con decimales
console.log(Number.parseInt(numero3)); // Devuelve NaN, ya que no es un número, son letras.

// Comprobar si un número es entero
console.log(Number.isInteger(numero4)); // Devolverá true
console.log(Number.isInteger(numero2)); // Devolverá fralse
console.log(Number.isInteger(numero3)); // Devolverá fralse

// Convertir String a numero
console.log(numero4.toString());
