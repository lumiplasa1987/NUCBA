const tomarDatos = function () {

    let peliculaUno = document.getElementById("pelicula1").value;
    let peliculaDos = document.getElementById("pelicula2").value;
    let peliculaTres = document.getElementById("pelicula3").value;
    let peliculaCuatro = document.getElementById("pelicula4").value;
    let peliculaCinco = document.getElementById("pelicula5").value;
    let añoUno = document.getElementById("año1").value;
    let añoDos = document.getElementById("año2").value;
    let añoTres = document.getElementById("año3").value;
    let añoCuatro = document.getElementById("año4").value;
    let añoCinco = document.getElementById("año5").value;

    var listadoPeliculas = [];
    listadoPeliculas.push(peliculaUno,peliculaDos,peliculaTres,peliculaCuatro,peliculaCinco);


    if (!peliculaUno || !peliculaDos || !peliculaTres || !peliculaCuatro || !peliculaCinco || !añoUno ||!añoDos || !añoTres || !añoCuatro || !añoCinco ) {
         alert ("Ingresa 5 peliculas con su respectivo año")
}else {
        alert ("Las peliculas que ingresaste son:                 " + listadoPeliculas + "         !!!TIENES MUY BUENOS GUSTOS!!!")
    }
}



