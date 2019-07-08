let buscar = document.querySelector('#buscar-paciente')
buscar.addEventListener('click', function(){
    console.log('Requisição feita')

    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function(){

        let erro = document.querySelector('#error-ajax')
        
        if(xhr.status == 200){
            let jsonPacientes = JSON.parse(xhr.responseText)
            jsonPacientes.forEach(element => {
                montarTr(element)
            });
            console.log(xhr.status)
            erro.classList.add('invisible')
        }

        else{
            console.log(xhr.status)
            console.log(xhr.responseText)
            erro.classList.remove('invisible')
        }
        
    })

    xhr.send()
})