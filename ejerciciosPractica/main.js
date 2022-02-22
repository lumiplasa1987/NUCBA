const seleccionarLenguaje  = () => {
    let lenguajes = document.getElementById('lenguajes')
    let lenguajeSelection = lenguajes.value

    document.getElementById('lenguajeElegido').innerHTML  = `Ud. seleccionado el
       lenguaje ${lenguajeSelection}.`
}

