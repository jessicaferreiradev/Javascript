var idade = 13;

if (idade < 16) {
    console.log('Você não vota')
}else {
    if (idade < 18 || idade > 65) {
        console.log('Voto opcional.')
    } else {
        console.log('Voto Obrigatório!')
    }
}