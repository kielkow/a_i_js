function validacaoImc(nome,altura, peso, gordura){
    if ((altura >= 3 || peso <= 0) || (altura <= 0 || peso >= 1000) || (nome === '') || (gordura == '')) {
        return 'Valor preenchido inválido'
    }
    else {
        let imc = (peso / (Math.pow(altura, 2)))
        return imc.toFixed(2)
    }
}
