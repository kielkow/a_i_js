let btnAdd = document.querySelector('#adicionar-paciente')
btnAdd.addEventListener('click', function (event){
    event.preventDefault()
    let paciente = objPaciente()
    montarTr(paciente)
    limpar()
})