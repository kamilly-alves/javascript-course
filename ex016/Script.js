function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value == 0 ||  fim.value == 0 ||  passo.value == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando:<br>' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if( p < 0){
            window.alert('Invalido! Considerando passo 1')
            p = 1
        }
        
        //CONTAGEM CRESCENTE
        if( i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` 
               }
               
        //CONTAGEM REGRESSIVA
        }else{
            for (let c = i; c >= f; c -=p){
                res.innerHTML += `${c} \u{1F3C1}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`     
    }
}