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

let btnAdd = document.querySelector('#adicionar-paciente')
btnAdd.addEventListener('click', function (event){
    event.preventDefault()
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('gordura').value = ''
    document.getElementById('nome').value = ''
})


