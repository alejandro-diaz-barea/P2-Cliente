// <!-- 03 - JavaScript Externo
//     Usualmente tu código JavaScript se recomienda colocarlo en un archivo externo
//     veamosc como hacerlo
// -->

// alert("Hola Mundo")
'use strict'

// 04 - Veamos como crear nuestro primer programa en JS
// const nombre = prompt('Cual es tu nombre?');
// document.querySelector('.contenido').innerHTML = ` ${nombre} está aprendiendo JavaScript Moderno`;

// 05 - Comentar el código
// Comentar el código es una de las caracteristicas más importantes que debes adoptar temprano
// en tu carrera acomo programador.
// Existen 2 tipos de comentarios:

// 1- de una linea

/*
    2.  de múltiples lineas
  */

// 06 - Todos los navegadores tienen una consola de Javascript, las mejores sin duda son firefox y Chrome
// La consola es muy útil ya que podrás observar tu código JS, resultados y seleccionar elementos

// Se pueden crear variables e imprimirlas
const hola = 'Hola desde la consola'
console.log(hola)

// También se pueden crear arrays
console.log([1, 2, 3, 4])

// De la misma forma se pueden crear objetos
const obj = { nombre: 'juan', profesion: 'Desarrollador Web' }
console.log(obj)

// También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4])

// o mostrar algún error
console.error('Algo salió mal')

// Limpiar la consola
console.clear()

// O enviar advertenciasclear
console.warn('Eso no esta permitido')

// También monitorear el tiempo que tarda algo en ejecutarse
console.time('Hola'); console.warn('Eso no esta permitido'); console.warn('Eso no esta permitido')
console.warn('Eso no esta permitido')
console.timeEnd('Hola')

// 07 - JavaScript tiene una caracteristica, a diferencia de otros lenguajes de programación el ; al final
// https://davidjsmoreno.medium.com/desmitificando-el-uso-del-punto-y-coma-en-javascript-c6bd69fe4e04
// https://javascript.com.es/es-necesario-usar-el-punto-coma
// https://keepcoding.io/blog/punto-y-coma-en-javascript/#Entendiendo_el_punto_y_coma
// no es obligatorio salvo que tengas 2 líneas de código en una misma.
// ejemplo

console.log('Hola')
console.log('Mundo')

// va a funcionar, pero si tienes un código desordenado; no va a funcionar salvo que pongas ;
console.log('Hola'); console.log('Mundo')

// Habilitar y deshabilitar el word wrap
console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo'); console.log('Hola'); console.log('Mundo')

// Como recomendación siempre pon una instrucción por linea, no es obligatorio salvo el caso que vimos
// anteriormente pero va a facilitar mucho tu código

// Ahora, vamos a crear una función, no te preocupes aun por funciones lo veremos más adelante

// function hola() {
// console.log('ok')
// }

// en estos casos esta función es valida y va a funcionar, pero es mejor utilizar tabs o espacios

// 08 - Obteniendo ayuda con ESLint para revisar errores de código.

// crear el archivo .eslintrc.json

// {
//     "parserOptions" : {
//         "ecmaVersion": 6
//     },
//     "rules" : {
//         "semi": ["error", "always"] // Muestra errores de código o también errores de código
//     }
// }
