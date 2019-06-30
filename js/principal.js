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

document.querySelector('#primeiro-paciente .info-imc').textContent = imcP.toFixed(2)
document.querySelector('#segundo-paciente .info-imc').textContent = imcS.toFixed(2)
document.querySelector('#terceiro-paciente .info-imc').textContent = imcT.toFixed(2)
document.querySelector('#quarto-paciente .info-imc').textContent = imcQr.toFixed(2)
document.querySelector('#quinto-paciente .info-imc').textContent = imcQ.toFixed(2)