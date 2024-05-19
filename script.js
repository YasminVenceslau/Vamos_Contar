
    
    
    
function contar(){ 
    //recupera os valores dos elementos no HTML, Number converte string para número
    var nInicial = Number(document.getElementById('inicio').value)
    var nFinal = Number(document.getElementById('fim').value)
    var pulada = Number(document.getElementById('passo').value)
    var res = document.getElementById('resultado')
    
    var falta = "Escolha outros valores!"

    var resultado = []
    
    var spanTem = "<span class='tem'></span>"
    var spanNTem ="<span class='ntem'> Parâmetros Inválidos</span>"
    
    
     if (nInicial >= nFinal){ //se o nfinal for menor que o nInicial
        

        res.innerHTML =  spanNTem + "<br>" + falta
        
    } else {
        
        for (let i = nInicial ; i <= nFinal;i += pulada){
        
            resultado.push(i)
            

        }
        let certo = resultado.map( t=> t.toString().match(/.{1,6}/g).join('👉'))
    
        res.innerHTML = certo.join('👉') + spanTem
    }

    
    
    
   

}

