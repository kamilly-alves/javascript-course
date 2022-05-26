function carregar() {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'manha.jpeg'
        document.body.style.background = '#2b4725'

    } else if (hora >= 12 && hora <= 18){
        //Boa Tarde!
        img.src = 'tarde.jpeg'
        document.body.style.background = '#bf7c75'
    }else{
        //Boa Noite!
        img.src = 'noite.jpeg'
        document.body.style.background = '#1c2e32'
    }
}
