document.addEventListener("DOMContentLoaded", () => {
  // Selectores
  const inputNombre = document.querySelector("#nombre");
  const inputEmail = document.querySelector("#email");
  const inputTelefono = document.querySelector("#telefono");
  const inputEmpresa = document.querySelector("#empresa");
  const formulario = document.querySelector("#formulario");

  // Listeners
  inputNombre.addEventListener("blur", validar);
  inputEmail.addEventListener("blur", validar);
  inputTelefono.addEventListener("blur", validar);
  inputEmpresa.addEventListener("blur", validar);

  // Funciones
  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
      return;
    }

    limpiarAlerta(e.target.parentElement);
  }

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-center", "text-white", "p-2");
    referencia.appendChild(error);
  }

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputNombre.value.trim() === "" || inputEmail.value.trim() === "" || inputTelefono.value.trim() === "" || inputEmpresa.value.trim() === "") {
      mostrarAlerta("Por favor, complete todos los campos antes de enviar el formulario.", formulario);
    } else {
      const cliente = {
        nombre: inputNombre.value,
        email: inputEmail.value,
        telefono: inputTelefono.value,
        empresa: inputEmpresa.value,
      };
      guardarEnIndexedDB(cliente);
    }
  });

  // Función para guardar los datos en IndexedDB
  function guardarEnIndexedDB(cliente) {
    const request = indexedDB.open("CRM", 1);

    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("cliente")) {
        const objectStore = db.createObjectStore("cliente", { keyPath: "id", autoIncrement: true });
        objectStore.createIndex("nombre", "nombre", { unique: false });
        objectStore.createIndex("email", "email", { unique: false });
        objectStore.createIndex("telefono", "telefono", { unique: false });
        objectStore.createIndex("empresa", "empresa", { unique: false });
      }
    };

    request.onsuccess = function (event) {
      const db = event.target.result;
      const transaction = db.transaction(["cliente"], "readwrite");
      const objectStore = transaction.objectStore("cliente");
      const request = objectStore.add(cliente);

      request.onsuccess = function () {
        console.log("Cliente añadido a IndexedDB");
        alert("Cliente añadido");
        formulario.reset(); 
      };

      transaction.oncomplete = function () {
        db.close();
      };
    };

    request.onerror = function (event) {
      console.error("Error al abrir la base de datos:", event.target.error);
    };
  }
});