//const colores = [azul, amarillo, verde, rojo, naranja, negro, marron]

/* const auto = {
    marca:"volskwagen",
    modelo:"gol",
    ano:"2008",
    km:130000
}

for (const prop in auto){
    console.log(prop , auto[prop]);
} */

// Ejerecicio3

const jugadores = [
    {id:1, nombre:'Messi', logros:395},
    {id:2, nombre:'Hermoso', logros:234},
    {id:3, nombre:'Maradona', logros:455},
    {id:4, nombre:'Alexia', logros:356},
    {id:5, nombre:'Ronaldo', logros:67},
    {id:6, nombre:'Mertens', logros:78}
]


const resultados = {
    scoreTotal: 0,
    scorePromedio: 0,
    playerScoreMin:"",
    playerScoreMax: "",
    playersName:"",
}

let logroMenor = jugadores[0].logros
let logroMayor = jugadores[0].logros

for (let i = 0; i < jugadores.length; i++) {

    resultados.scoreTotal += jugadores[i].logros
    resultados.playersName +=  jugadores[i].nombre + ","

    if (jugadores[i].logros < logroMenor) {
        logroMenor = jugadores[i].logros;

        resultados.playerScoreMin = jugadores[i].nombre;
    }
    else if (jugadores[i].logros > logroMayor) {
        logroMayor = jugadores[i].logros;

        resultados.playerScoreMax = jugadores[i].nombre;


    }

}

resultados.scorePromedio = resultados.scoreTotal / jugadores.length;



console.log(resultados)