function verificar() { 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Você inseriu os dados incorretamente, verifique.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "homem"
            if (idade >=0 && idade< 10) {
            img.setAttribute('src', 'bebemenino.png')
            } else if (idade <18) {
            img.setAttribute('src', 'jovemhomem.png')
            } else if (idade <50) {
            img.setAttribute('src', 'adultohomem.png')
            } else { 
            img.setAttribute('src', 'senhorhomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade< 10) {
            img.setAttribute('src', 'bebemenina.png')
            } else if (idade <18) {
            img.setAttribute('src', 'jovemmulher.png')
            } else if (idade <50) {
            img.setAttribute('src', 'adultamulher.png')
            } else { 
            img.setAttribute('src', 'senhoramulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}   