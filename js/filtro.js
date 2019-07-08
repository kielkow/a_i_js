let filtro = document.querySelector('.filtro-pacientes')
filtro.addEventListener('input', function (){
    let pacientes = document.querySelectorAll('.paciente-valido')

    if(filtro.value.length > 0){
        pacientes.forEach(element => {
            let nome = element.querySelector('.info-nome').textContent
            let expressao = new RegExp(filtro.value, 'i')
            if(expressao.test(nome)){
                element.classList.remove('invisible')
            }
            else{
                element.classList.add('invisible')
            }

            /* 
            SEM REGEX
            
            let nome = element.querySelector('.info-nome').textContent
            let comparavel = nome.substr(0, filtro.value.length)
            let comparavelMin = comparavel.toLowerCase()
            let inputMin = filtro.value.toLowerCase()
            if(comparavelMin == inputMin){
                element.classList.remove('invisible')
            }
            else{
                element.classList.add('invisible')
            }
            */
        });
    }
    else{    
        pacientes.forEach(element => {
            element.classList.remove('invisible')
        });
        
    }

})