document.addEventListener('DOMContentLoaded', async () => {
    const dbName = 'CRM'; // Nombre de la base de datos
    const dbVersion = 1; // Versión de la base de datos
    let db;

    // Abrir la base de datos existente o crear una nueva
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = function (event) {
        console.log('Error al abrir la base de datos.');
    }

    request.onsuccess = function (event) {
        db = event.target.result;
        mostrarClientes(); // Llamar a la función para mostrar clientes
    }

    request.onupgradeneeded = function (event) {
        db = event.target.result;
        let objectStore;

        // Crear una tienda de objetos "cliente" en la base de datos si no existe
        if (!db.objectStoreNames.contains('cliente')) {
            objectStore = db.createObjectStore('cliente', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('telefono', 'telefono', { unique: true });
            objectStore.createIndex('empresa', 'empresa', { unique: false });
        }
    }

    // Función para mostrar los datos del cliente en el formulario
    function mostrarClientes() {
        if (!db) {
            console.error('Base de datos no disponible.');
            return;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const clientId = urlParams.get('id');

        const transaction = db.transaction(['cliente'], 'readonly');
        const objectStore = transaction.objectStore('cliente');
        const request = objectStore.get(Number(clientId));

        request.onsuccess = function (event) {
            const cliente = event.target.result;

            if (cliente) {
                // Llenar el formulario con los datos del cliente
                document.querySelector('#nombre').value = cliente.nombre;
                document.querySelector('#email').value = cliente.email;
                document.querySelector('#telefono').value = cliente.telefono;
                document.querySelector('#empresa').value = cliente.empresa;
                document.querySelector('#id').value = cliente.id;
            } else {
                console.error('Cliente no encontrado en la base de datos.');
            }
        }
    }

    // Manejar el envío del formulario
    document.querySelector('#formulario').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener valores del formulario
        const nombreInput = document.querySelector('#nombre');
        const emailInput = document.querySelector('#email');
        const telefonoInput = document.querySelector('#telefono');
        const empresaInput = document.querySelector('#empresa');
        const idInput = document.querySelector('#id');
        const nombre = nombreInput.value;
        const email = emailInput.value;
        const telefono = telefonoInput.value;
        const empresa = empresaInput.value;
        const id = idInput.value;

        // Verificar que todos los campos estén completos
        if (nombre === '' || email === '' || telefono === '' || empresa === '') {
            alert('Completa todos los campos');
            return;
        }

        const transaction = db.transaction(['cliente'], 'readwrite');
        const objectStore = transaction.objectStore('cliente');
        const index = objectStore.index('email');

        const requestGetEmail = index.get(email);

        requestGetEmail.onsuccess = function (event) {
            if (event.target.result && event.target.result.id !== id) {
                alert('El correo electrónico ya está registrado para otro cliente. Usa otro correo electrónico.');
            } else {
                const cliente = {
                    nombre: nombre,
                    email: email,
                    id: Number(id),
                    telefono: telefono,
                    empresa: empresa
                };

                const requestUpdate = objectStore.put(cliente);

                requestUpdate.onsuccess = function () {
                    console.log('Cliente actualizado en la base de datos');
                    alert('Cliente actualizado correctamente');

                    // Limpiar los campos del formulario después de la actualización
                    nombreInput.value = '';
                    emailInput.value = '';
                    telefonoInput.value = '';
                    empresaInput.value = '';
                    idInput.value = '';
                };

                requestUpdate.onerror = function (event) {
                    console.error('Error al actualizar el cliente:', event.target.error);
                    alert('Error al actualizar el cliente. Verifica los datos.');
                }
            }
        };
    });
});
