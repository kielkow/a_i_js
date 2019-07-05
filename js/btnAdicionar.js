let btnAdd = document.querySelector('#adicionar-paciente')
btnAdd.addEventListener('click', function (event){
    event.preventDefault()
    let paciente = objPaciente()
    montarTr(paciente)
    let erro = document.querySelector('.alert').textContent
    if(erro === ''){
        limpar() 
    }
})