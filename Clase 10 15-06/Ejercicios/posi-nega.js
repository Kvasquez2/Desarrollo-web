function VerificarNum() {
  let number = parseFloat(document.getElementById("numinput").value);
  let resultElement = document.getElementById("resultado");

  //Comenzamos con condicionales
  if (number > 0) {
    resultElement.textContent = "El numero es positivo";
  } else  if (number < 0){
    resultElement.textContent = "El numero es negativo";
  }else{
    resultElement.textContent = "El numero es igual a cero"
  }
}
