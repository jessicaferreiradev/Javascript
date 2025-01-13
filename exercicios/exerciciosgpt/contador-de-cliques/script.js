let cont = 0;
var mostrarContador = document.getElementById('contador');
var botao = document.getElementById('meubotao');
function clique(){
    cont++
    if (cont == 1) {
        mostrarContador.innerHTML = 'Você clicou 1 vez'
    } else{
        mostrarContador.innerHTML = `Você clicou ${cont} vezes.`
    }
}