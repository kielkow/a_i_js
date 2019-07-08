let buscar = document.querySelector('#buscar-paciente')
buscar.addEventListener('click', function(){
    console.log('Requisição feita')

    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function(){
        let jsonPacientes = JSON.parse(xhr.responseText)

        jsonPacientes.forEach(element => {
            montarTr(element)
        });
    })

    xhr.send()
})