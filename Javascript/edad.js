

const ejercicio = (nombre, apellido, edad) => {
    if (edad < 18) {
          console.log (`Hola ${nombre} ${apellido}, eres menor de edad`)
    } else if (edad >= 18 && edad >60) {
        console.log (`Hola ${nombre} ${apellido}, eres mayor de edad`)
    } else {
            console.log (`Hola ${nombre} ${apellido}, eres mayor de edad y estas en la tercera edad`)
         }
}
 ejercicio ('Luis', 'Plazas', 32);