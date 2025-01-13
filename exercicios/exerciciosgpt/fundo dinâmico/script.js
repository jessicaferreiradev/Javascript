function enter(){
    var fundo = document.getElementsByName('fundo')
    var img = document.createElement('img')
    var back = document.getElementById('back')
    img.setAttribute('id','foto')
    back.style.backgroundSize = 'cover'
    if (fundo[0].checked){
        back.style.backgroundImage = "url('jinx.jpg')";
    } else if(fundo[1].checked){
        back.style.backgroundImage = "url('caitlyn.jpg')"
    } else if(fundo[2].checked){
        back.style.backgroundImage = "url('nezuko.jpg')"
    } else if(fundo[3].checked){
        back.style.backgroundColor = '#8a2be2'
    } else if (fundo[4].checked) {
        back.style.backgroundColor = '#15155e'
    } else if (fundo[5].checked){
        back.style.backgroundColor = '#ffff00'
    } else if (fundo[6].checked){
        back.style.backgroundColor = '#d87093'
    }
}