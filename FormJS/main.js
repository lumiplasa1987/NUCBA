const myForm = event => {
    event.preventDefault()
    const formState = []
    const mailFormat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let nombre = document.getElementById('name')
    let apellido = document.getElementById('lastName')
    let edad = document.getElementById('age')
    let email = document.getElementById('mail')
    let comentarios = document.getElementById('comments')
    let check = document.getElementById('cbox')


    !nombre.value ? nombre.classList.add('error') :
    formState.push({ element: 'name', value: nombre.value })

    !apellido.value ? apellido.classList.add('error') :
    formState.push({ element: 'lastName', value: apellido.value })

    !edad.value ? edad.classList.add('error') :
    formState.push({ element: 'age', value: edad.value })

    !email.value || !email.value.match(mailFormat) ? email.classList.add('error') :
    formState.push({ element: 'mail', value: email.value })

    !comentarios.value ? comentarios.classList.add('error') :
    formState.push({ element: 'comments', value: comentarios.value })

    check.checked ? alert('aceptar terminos y condiciones'):
    alert ('continuar')


    const dato = document.getElementById('formValues')

    const html = formState.map(item => {
        let p = document.createElement('p')
        p.innerText = item.value
        dato.appendChild(p)
    })

    formState.length === 3 && JSON.stringify(html)
}