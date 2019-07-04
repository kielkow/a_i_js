function imcInvalido(imc){
    if(imc === 'Peso ou altura inválido'){
        let erro = document.querySelector('.alert')
        erro.classList.add('erro')
        erro.textContent = imc
    }
    else{
        let erro = document.querySelector('.alert')
        erro.textContent = ''
        imc = document.createElement('tr')
        imc.classList.add('paciente-valido')
        return imc
    }
}