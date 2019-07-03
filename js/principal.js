function validacaoImc(altura, peso){
    if ((altura >= 3 || peso <= 0) || (altura <= 0 || peso >= 1000)) {
        return 'Peso ou altura inválido'
    }
    else {
        let imc = (peso / (Math.pow(altura, 2)))
        return imc.toFixed(2)
    }
}




function imcInvalido(imc){
    if(imc === 'Peso ou altura inválido'){
        imc = document.createElement('tr')
        imc.classList.add('paciente-invalido')
        return imc
    }
    else{
        imc = document.createElement('tr')
        return imc
    }
}





let btnAdd = document.querySelector('#adicionar-paciente')
btnAdd.addEventListener('click', function (event){
    event.preventDefault()

    let nome = document.querySelector('#nome').value
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    let gordura = document.querySelector('#gordura').value
    let imc = validacaoImc(altura, peso)

    let pacienteTr = imcInvalido(imc)
    let nomeTd = document.createElement('td')
    let pesoTd = document.createElement('td')
    let alturaTd = document.createElement('td')
    let gorduraTd = document.createElement('td')
    let imcTd = document.createElement('td')

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    imcTd.textContent = imc

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)

    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('gordura').value = ''
    document.getElementById('nome').value = ''
})

