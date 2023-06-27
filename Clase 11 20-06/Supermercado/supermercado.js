function productosDescuento() {
  let cantidad = parseInt(document.getElementById("cantidadInput").value);
  let precio = parseInt(document.getElementById("precioInput").value);
  let compra = cantidad * precio;
  let comprai;
  let obsequio = document.getElementById("more");

  if (cantidad >= 3) {
    comprai = compra * 0.85;
    obsequio.textContent =
      "Por la compra se te obsequiera 1 docena mas, llevarias la cantidad de :" +
      (cantidad + 1);
  } else {
    comprai = compra * 0.90;
  }

  let finCompra = document.getElementById("resutaldoTotal");
  let finDescuento = document.getElementById("resultadoDescuento");
  finCompra.textContent =
    "El valor las  " + cantidad + " docenas es de: " + compra;
  finDescuento.textContent = "El valor con el descuento es de " + comprai;



  let cantidadInput = document.getElementById("cantidadInput");

cantidadInput.addEventListener('input', limpiarResultados);

function limpiarResultados() {
    document.getElementById("resutaldoTotal").textContent = "";
    document.getElementById("resultadoDescuento").textContent = "";
    document.getElementById("more").textContent = "";
}
}
