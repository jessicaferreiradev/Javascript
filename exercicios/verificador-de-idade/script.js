function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // ano com 4 digitos
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os Dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade  = ${idade}`
        var genero = ''
        var Img = document.createElement('img')
        Img.setAttribute('Id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if ( idade >=0 && idade < 10){
                //criança
                Img.setAttribute('src','imagens/criança-menino.png')
            } else if (idade >= 10 && idade <21) {
                //adolescente
                Img.setAttribute('src', 'imagens/adoslecente-menino.png')
            }else if (idade >=21  && idade < 50){
                //adulto
                Img.setAttribute('src','imagens/adulto.png')
            } else if ( idade >=55) {
                //idoso
                Img.setAttribute('src', 'imagens/senhor.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10 ){
                //criança
                Img.setAttribute('src','imagens/criança-menina.png')
            } else if (idade >= 10 && idade < 21) {
                //adolescente
                Img.setAttribute('src', 'imagens/adolescente-menina.png')
            } else if (idade >= 21 && idade < 50) {
                //adulta
                Img.setAttribute('src','imagens/adulta.png')
            } else {
                //idosa
                Img.setAttribute('src','imagens/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(Img)
    }
}