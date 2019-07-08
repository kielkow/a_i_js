function validacaoImc(nome,altura, peso, gordura){
    if ((altura >= 3 || peso <= 0) || (altura <= 0 || peso >= 1000) || (nome === '') || (gordura >= 100 || gordura <= 0)) {
        return 'Valor preenchido inválido'
    }
    else {
        let imc = (peso / (Math.pow(altura, 2)))
        return imc.toFixed(2)
    }
}
