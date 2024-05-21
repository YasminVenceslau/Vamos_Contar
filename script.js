
    
    
    
function contar(){ 
    //recupera os valores dos elementos no HTML, Number converte string para número
    var nInicial = Number(document.getElementById('inicio').value)
    var nFinal = Number(document.getElementById('fim').value)
    var pulada = Number(document.getElementById('passo').value)
    var res = document.getElementById('resultado')
    
    var falta = "Escolha seus valores!"

    var resultado = []
    
    var spanTem = "<span class='tem'></span>"
    var spanNTem ="<span class='ntem'> Parâmetros Inválidos</span>"
    
    
     if (nInicial.length == 0 || nFinal.length == 0 || pulada.length == 0){ //se o nfinal for menor que o nInicial
        
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML =  spanNTem + "<br>" + falta
        
    } else {

        
        res.innerHTML = 'Contando.'
        res.innerHTML = 'Contando..'
        res.innerHTML = 'Contando...'



        if (nInicial < nFinal){
            //crescendo
            for(var i = nInicial; i <= nFinal; i += pulada){
                res.innerHTML += `${i} + \u{1F449}`
            }  

        }else{
            //regredindo
            for ( var i = nInicial ; i >= nFinal; i -= pulada){
                res.innerHTML += `${i} + \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }


}

