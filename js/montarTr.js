function montarTr(paciente){
    let pacienteTr = imcInvalido(paciente.imc)

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'))

    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)

    return tabela
}