function validacaoImc(altura, peso){
    if ((altura >= 3 || peso <= 0) || (altura <= 0 || peso >= 1000)) {
        return 'Peso ou altura inválido'
    }
    else {
        let imc = (peso / (Math.pow(altura, 2)))
        return imc.toFixed(2)
    }
}
