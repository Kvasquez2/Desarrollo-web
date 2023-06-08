////todo Obtener referencia a los elementos del formulario
////todo Identificar variables para darle funciones
const formulario = document.getElementById("login"); ////todo Elemento ya con funciones predeterminadas
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const buttonSesion = document.getElementById("button");

////todo  Agregar un evento de escucha al boton de inicio
buttonSesion.addEventListener("click", function (event) {
  event.preventDefault(); ////todo Evitar que se envie automacticamente el formulario

  ////todo Realizar validaciones del formulario
  if (!validarEmail(emailInput.value)) {
    mostrarError(emailInput, "Por favor ingresar un correo valido");
  } else if (passwordInput.value === "") {
    mostrarError(passwordInput, "Por favor ingresar una contraseña valida");
  } else {
    ////todo si todas las validaciones son exitosas continua con el formulario
    formulario.submit();
  }
});

////todo funcion para validad formato de email
function validarEmail(email) {
  ////todo utilizar una exprecion regular para la verificacion del correo esta valido
  const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
  return regexEmail.test(email);
}
function mostrarError(input, mensaje) {
  const errorMensaje = document.createElement("p"); ////todo aqui crea un elemento de html (p) donde se almacena si tiene error
  errorMensaje.className = "error-Mensaje";
  errorMensaje.textContent = mensaje;

  const contenedorInput = input.parentElement;
  contenedorInput.appendChild(errorMensaje);

  ////todo Agregar una clase con estilo para resaltar el campo con error
  contenedorInput.classList.add("error");
}

////todo Limpiar los mensajes de error al escribir en los campos
emailInput.addEventListener("input", limpiarError);
passwordInput.addEventListener("input", limpiarError);
function limpiarError() {
  const contenedorInput = this.parentElenent;
  const errorMensaje = contenedorInput.querySelector(".error-mensaje");
  contenedorInput.classlist.remove("error");
  if (errorMensaje) {
    contenedorInput.removeChild(errorMensaje);
    contenedorInput.classList.remove("error");
  }
}
