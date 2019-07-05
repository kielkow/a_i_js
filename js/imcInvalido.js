function imcInvalido(imc){
    if(imc === 'Valor preenchido inválido'){
        let erro = document.querySelector('.alert')
        erro.classList.add('erro')
        erro.textContent = imc
        return null
    }
    else{
        let erro = document.querySelector('.alert')
        erro.textContent = ''
        imc = document.createElement('tr')
        imc.classList.add('paciente-valido')
        return imc
    }
}