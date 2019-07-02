/*
alert('Site carregado!')

let altura, peso, imc

document.querySelector('.titulo').textContent = 'Aparecida Nutricionista:'

let pacientes = document.querySelectorAll('.paciente')
console.log(pacientes)

pacientes.forEach(element => {
    altura = element.querySelector('.info-altura').textContent
    peso = element.querySelector('.info-peso').textContent
    imc = peso / (Math.pow(altura, 2))

    if ((altura >= 3 || peso <= 0) || (altura <= 0 || peso >= 1000)) {
        element.querySelector('.info-imc').textContent = 'Peso ou altura inválido'
        element.classList.add('paciente-invalido')
    }
    else {
        element.querySelector('.info-imc').textContent = imc.toFixed(2)
    }
});
*/


let btnAdd = document.querySelector('#adicionar-paciente')
btnAdd.addEventListener('click', function (event){
    event.preventDefault()

    let nome = document.querySelector('#nome').value
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    let gordura = document.querySelector('#gordura').value
    let imc = (peso / (Math.pow(altura, 2)))

    let pacienteTr = document.createElement('tr')
    let nomeTd = document.createElement('td')
    let pesoTd = document.createElement('td')
    let alturaTd = document.createElement('td')
    let gorduraTd = document.createElement('td')
    let imcTd = document.createElement('td')

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    imcTd.textContent = imc.toFixed(2)

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


