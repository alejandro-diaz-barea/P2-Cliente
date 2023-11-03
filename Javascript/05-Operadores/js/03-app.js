// Null y Undefined

// En javascript existen diferentes tipos de datos primitivos a los que hemos visto, además de string y number se tienen, por ejemplo, booleans que son true o false,  y existen un par más llamados undefined y null.

// veamos un ejemplo de undefined.
let numero;

console.log(numero); // Devuelve undefined => La variable esta definida pero su valor no, por lo tanto es undefined...
console.log(typeof numero);

// En el caso de null es más bien asignarlo

const numero2 = null;
console.log(numero2);
console.log(typeof numero2); // Nos dirá que es un objeto, la especificación de ecma que es quien define el standard del lenguaje dice que null debe ser un objeto.

// Comparando null y undefined - Comparar un valor null y un undefined puede ser de las cosas más complicadas...
console.log(numero == numero2);

// Puedes ver que el resultado es true, a pesar de que numero no tiene un valor, eso usualmente nos lleva a ejecución de código no deseada o con comportamientos extraños ya que comparamos un valor que no existe, y nos retorna true.

// Para esto tambien es mas util el comparador estricto
console.log(numero === numero2);

// De esta forma nosevitamos falsos positivos y evitamos errores.
