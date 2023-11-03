// MomentJS => https://momentjs.com/

const diaHoy = new Date()

console.log(new Date().toLocaleString())
console.log(new Date().toTimeString())


moment.locale('es')  // Le decimos a moment que queremos las fechas en español.

console.log(moment().format('MMMM Do YYYY, h:mm:ss a', diaHoy)) // Le podemos pasar el formato, con new Date que no podíamos.

console.log(moment().add(3, 'days').calendar()) // Para poner la fecha de final actual mas 3 dias (típico con los cupones en las webs tipo Groupon)

console.log(moment().format('LLLL', diaHoy))
