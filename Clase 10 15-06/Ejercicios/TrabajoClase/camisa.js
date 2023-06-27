function VerificarCantidad() {
    let number = parseFloat(document.getElementById("numinput").value);
    let resultElement = document.getElementById("resultado");
  
    //Comenzamos con condicionales
    if (number >= 5) {
      resultElement.textContent = "Realizara su compra con tarjeta";
    } else{
      resultElement.textContent = "Realizara su compra en efectivo"
    }
  }
  