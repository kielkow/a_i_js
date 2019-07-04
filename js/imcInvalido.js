function imcInvalido(imc){
    if(imc === 'Peso ou altura inválido'){
        imc = document.createElement('tr')
        imc.classList.add('paciente-invalido')
        return imc
    }
    else{
        imc = document.createElement('tr')
        imc.classList.add('paciente-valido')
        return imc
    }
}