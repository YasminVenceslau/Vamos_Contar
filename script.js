
function contar(){ 
    
    //recupera os valores dos elementos no HTML, Number converte string para número
    var nInicial = Number(document.getElementById('inicio').value)
    var nFinal = Number(document.getElementById('fim').value)
    var pulada = Number(document.getElementById('passo').value)
    var resultado = []



     if (nInicial >= nFinal){ //se o nfinal for menor que o ninicial 
            
        console.log('O início da contagem é maior que o número final, escolha outro.')
    } else {
        while(nInicial <= nFinal ){//loop para fazer a contagem, termina quando nfinal é menor que o nInicial
            
            resultado.push(nInicial)
            nInicial += pulada
        }
            
        console.log(`${resultado.join(' ')}`)
        console.log(`O resultado final é ${nInicial-pulada}`)

}
}