// En javascript hay un objeto llamado Date
const diaHoy = new Date()
let valor

// En este momento
Date.now()

// Date es Mes, dia y año
let cumple = new Date('1-5-1987')
cumple = new Date('January 5 1987')

// Convertir fecha a string
console.log(typeof valor)
// .toString lo cambiaria de object a string
// cumple.toString();

valor = cumple

valor = diaHoy.getMonth() // Meses en número, es decir, Enero es 0, etc...
valor = diaHoy.getDate()
valor = diaHoy.getDay()
valor = diaHoy.getFullYear() // Año actual => 2023
valor = diaHoy.getMinutes() // En que minuto estamos, por ejemplo si son las 10:54, devolvera 54.
valor = diaHoy.getHours() // En que hora estamos, por ejemplo si son las 10:54, devolvera 10. 
valor = diaHoy.getTime()  // Milisegundos que han pasado desde el 1 de enero de 1990 hasta la fecha.
valor = diaHoy.getFullYear()
valor = diaHoy.setFullYear(2018) // Los set sirven para modificar el valor del objeto fecha. En este caso hemos modificado el año.

console.log(valor)
