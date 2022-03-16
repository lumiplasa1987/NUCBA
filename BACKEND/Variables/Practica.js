let nombre = 'Luis'
let edad = 34
let altura = 1.86
let peliculas = ['El padrino', 'El señor de los anillos', 'Amelie']

console.log(nombre, edad, altura, peliculas);

let aumentoAltura = parseFloat(prompt("Ingresa altura a aumentar"));
let nuevaPelicula = prompt("Ingrese nueva pelicula");

altura = altura + aumentoAltura;
peliculas.push(nuevaPelicula);

console.log(nombre, edad, altura, peliculas);








