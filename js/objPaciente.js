function objPaciente(){
    let form = document.querySelector('.form-paciente')
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: validacaoImc(form.nome.value, form.altura.value, form.peso.value, form.gordura.value)
    }
    return paciente
}