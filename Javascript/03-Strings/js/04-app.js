// Métodos para eliminar espacios en blanco:

const producto = "        Monitor 20 Pulgadas      ";

console.log(producto);
console.log(producto.length);

// Eliminar el inicio
console.log(producto.trimStart()); // Elimina todos los espacios en blancos del inicio
console.log(producto.trimEnd()); // Elimina todos los espacios en blancos del final

// Los métodos en javaScript se pueden encadenar(patrón chaining o encadenamiento de métodos), es decir, colocarse uno junto al otro
console.log(producto.trimStart().trimEnd()); // Elimina en ambos a la vez.

// Otro método (mas antiguo) es trim que hace lo mismo que los dos anteriores a la vez.
console.log(producto.trim().length);
