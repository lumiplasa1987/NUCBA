class Jugador {
    nombre = ''
    apellido = ''
    clubes = {}
    logros = []

    constructor (nombre, apellido,  clubes, logros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.clubes = clubes;
        this.logros = logros;
    }
}



const luis = new Jugador (
    'Luis',
    'Plazas',
    {
        River:true,
        Barcelona:true,
        Juventus:true,
        Chelsea:true
    },

    ["balon de oro","mundial de futbol","copa libertadores", "champions league"]
)

console.log(luis)

