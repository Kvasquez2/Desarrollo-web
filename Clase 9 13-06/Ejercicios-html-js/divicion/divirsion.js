function dividir(){
    let numero1=parseInt (document.getElementById("n1").value)
    let numero2=parseInt (document.getElementById("n2").value)
    let divisor= numero1/numero2
    //Mostrar el resultado
    document.getElementById("resultado").textContent="La multiplicacion es: "+divisor;
}