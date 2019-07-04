function objPaciente(){
    let form = document.querySelector('.form-paciente')
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.peso.value,
        gordura: form.gordura.value,
        imc: validacaoImc()
    }
    return paciente
}