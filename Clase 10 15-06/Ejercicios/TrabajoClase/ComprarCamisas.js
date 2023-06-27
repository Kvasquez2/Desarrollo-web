function CalcularCompra(){
    let cantidad = parseInt(document.getElementById("cantidadInput").value)
    let valor = parseInt(document.getElementById("valorInput").value)
    let total = cantidad * valor
    let totalCompra

    let resultado = document.getElementById("totalResultado")
    let descuento = document.getElementById("totalCompraResultado")
        

    if(cantidad >=3){
        totalCompra = total * 0.8
        resultado.textContent = "Su total de la compra con el 20% : " + total;
    }
    else{
        totalCompra = total * 0.9
        resultado.textContent = "Su total de la compra con el 10% : " + total;
    }
    descuento.textContent = "el total con descuento es de: " + totalCompra

}