function prueba () {

    let num1 = parseInt(prompt("Escribe un nro"))
    let num2 = parseInt(prompt("Escribe un nro"))
    document.getElementsByClassName("resultado")[0].innerHTML = num1 +num2

}

function calculadora() {
    let numAction = prompt ("Ingresa una operación")
    let num1 = parseInt (prompt("Ingresa el primer nro"))
    let num2 = parseInt (prompt("Ingresa el segundo nro"))

    if (numAction === "sumar" || numAction === "+") {
        document.getElementById("resultadoC").innerHTML = num1 + num2
    } else if (numAction === "restar" || numAction === "-") {
        document.getElementById("resultadoC").innerHTML = num1 - num2
    } else if (numAction === "multiplicar" || numAction === "*") {
        document.getElementById("resultadoC").innerHTML = num1 * num2
    } else if (numAction === "dividir" || numAction === "/") {
        document.getElementById("resultadoC").innerHTML = num1 / num2
    } else {
        alert("Por favor ingresar numero u operacion valida")
    }
}