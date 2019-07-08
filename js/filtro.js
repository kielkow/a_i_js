let filtro = document.querySelector('.filtro-pacientes')
filtro.addEventListener('input', function (){
    let pacientes = document.querySelectorAll('.paciente-valido')

    if(filtro.value.length > 0){
        pacientes.forEach(element => {
            let nome = element.querySelector('.info-nome').textContent
            if(nome != filtro.value){
                element.classList.add('invisible')
            }
            else{
                element.classList.remove('invisible')
            }
        });
    }
    else{
        pacientes.forEach(element => {
            element.classList.remove('invisible')
        });
    }

})