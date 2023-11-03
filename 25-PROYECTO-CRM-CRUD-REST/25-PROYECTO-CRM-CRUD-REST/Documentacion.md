# Documentación de IndexedDB

## Introducción

IndexedDB es una API de almacenamiento de bases de datos en el navegador que permite a las aplicaciones web almacenar y recuperar datos de manera eficiente. A diferencia de las cookies y el almacenamiento local, IndexedDB proporciona una capacidad de almacenamiento más potente y escalable.

## Características principales

### 1. Almacenamiento de objetos

IndexedDB almacena datos en forma de objetos. Puedes almacenar y recuperar objetos JavaScript, lo que lo hace adecuado para una amplia gama de aplicaciones.

### 2. Transacciones

IndexedDB utiliza transacciones para garantizar la integridad de los datos. Las transacciones permiten realizar operaciones de lectura y escritura de forma segura.

### 3. Índices

IndexedDB permite crear índices para acelerar las consultas. Puedes indexar propiedades específicas de tus objetos para mejorar el rendimiento de las búsquedas.

## Uso básico

```javascript
// Abrir una base de datos
var request = indexedDB.open("MiBaseDeDatos", 1);

request.onerror = function(event) {
  console.log("Error al abrir la base de datos");
};

request.onsuccess = function(event) {
  var db = event.target.result;
  console.log("Base de datos abierta correctamente");

  // Acceder a un almacén de objetos
  var transaction = db.transaction("MiAlmacen", "readwrite");
  var objectStore = transaction.objectStore("MiAlmacen");
  
  // Agregar un objeto
  var nuevoObjeto = { id: 1, nombre: "Ejemplo" };
  var addRequest = objectStore.add(nuevoObjeto);

  addRequest.onsuccess = function(event) {
    console.log("Objeto agregado correctamente");
  };
};
