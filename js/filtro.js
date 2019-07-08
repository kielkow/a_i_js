let filtro = document.querySelector('.filtro-pacientes')
filtro.addEventListener('input', function (){
    let pacientes = document.querySelectorAll('.paciente-valido')
    pacientes.forEach(element => {
        let nome = element.querySelector('.info-nome').textContent
        console.log(nome)
    });
})