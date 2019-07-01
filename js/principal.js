alert('Site carregado!')

document.querySelector('.titulo').textContent = 'Aparecida Nutricionista:'

let alturaP = document.querySelector('#primeiro-paciente .info-altura').textContent
let pesoP = document.querySelector('#primeiro-paciente .info-peso').textContent
let imcP = pesoP / (Math.pow(alturaP, 2))

let alturaS = document.querySelector('#segundo-paciente .info-altura').textContent
let pesoS = document.querySelector('#segundo-paciente .info-peso').textContent
let imcS = pesoS / (Math.pow(alturaS, 2))

let alturaT = document.querySelector('#terceiro-paciente .info-altura').textContent
let pesoT = document.querySelector('#terceiro-paciente .info-peso').textContent
let imcT = pesoT / (Math.pow(alturaT, 2))

let alturaQr = document.querySelector('#quarto-paciente .info-altura').textContent
let pesoQr = document.querySelector('#quarto-paciente .info-peso').textContent
let imcQr = pesoQr / (Math.pow(alturaQr, 2))

let alturaQ = document.querySelector('#quinto-paciente .info-altura').textContent
let pesoQ = document.querySelector('#quinto-paciente .info-peso').textContent
let imcQ = pesoQ / (Math.pow(alturaQ, 2))





if ((alturaP >= 3 || pesoP <= 0) || (alturaP <= 0 || pesoP >= 1000)) {
    document.querySelector('#primeiro-paciente .info-imc').textContent = 'Peso ou altura inválido'
}
else {
    document.querySelector('#primeiro-paciente .info-imc').textContent = imcP.toFixed(2)
}





if ((alturaS >= 3 || pesoS <= 0) || (alturaS <= 0 || pesoS >= 1000)) {
    document.querySelector('#segundo-paciente .info-imc').textContent = 'Peso ou altura inválido'
}
else {
    document.querySelector('#segundo-paciente .info-imc').textContent = imcS.toFixed(2)
}




if ((alturaT >= 3 || pesoT <= 0) || (alturaT <= 0 || pesoT >= 1000)) {
    document.querySelector('#terceiro-paciente .info-imc').textContent = 'Peso ou altura inválido'
}
else {
    document.querySelector('#terceiro-paciente .info-imc').textContent = imcT.toFixed(2)
}





if ((alturaQr >= 3 || pesoQr <= 0) || (alturaQr <= 0 || pesoQr >= 1000)) {
    document.querySelector('#quarto-paciente .info-imc').textContent = 'Peso ou altura inválido'
}
else {
    document.querySelector('#quarto-paciente .info-imc').textContent = imcQr.toFixed(2)
}






if ((alturaQ >= 3 || pesoQ <= 0) || (alturaQ <= 0 || pesoQ >= 1000)) {
    document.querySelector('#quinto-paciente .info-imc').textContent = 'Peso ou altura inválido'
}
else {
    document.querySelector('#quinto-paciente .info-imc').textContent = imcQ.toFixed(2)
}
