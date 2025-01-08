function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // ano com 4 digitos
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os Dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        
    }
}