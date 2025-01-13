function confirmar(){
    var nome = document.getElementById('txtnome');
    var mail = document.getElementById('txtemail');
    var res = document.getElementById('resultado')
    const email = mail.value
    if (nome.value.trim() === "" || mail.value.trim() === ""){
        alert('Insira as informações corretamente');
    } else {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(email)) {
            alert('E-mail válido!');
            res.innerHTML = 'Cadastro realizado com sucesso!'
        } else {
            alert('Insira seu e-mail corretamente!')
        }
    }

}