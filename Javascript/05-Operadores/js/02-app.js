const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Comprobar si 2 valores son iguales o diferentes
console.log(numero1 == numero3);
console.log(numero1 == numero2); // ¿De verdad son iguales?

// Typeof - Comprobamos sus tipos.
console.log(typeof numero1);
console.log(typeof numero2);

// COmparador estricto (revisa valor y tipo de dato)
console.log(numero1 === numero2);

// Comprobar si 2 valores son diferentes

const password1 = "admin"
const password2 = "Admin"

console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);
console.log(numero1 !== parseInt(numero2));


// Por este motivo que hemos visto, se recomienda USAR SIEMPRE LA comparación ESTRICTA.
