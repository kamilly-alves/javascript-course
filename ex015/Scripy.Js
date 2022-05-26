function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById ('res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createAttribute('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src','foto-jovem-h.jpeg')
                
            } else if (idade < 50) {
                 //adulto
                 img.setAttribute('src','foto-homem-a.jpeg')
            }else {
                //idoso
                img.setAttribute('src','foto-idoso-h.jpeg')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','foto-bebe-f.jpeg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src','foto-jovem-f.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src','foto-mulher-a.jpeg')
            }else {
                //idoso
                img.setAttribute('src','foto-idosa-f.jpeg')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)  
    }
}