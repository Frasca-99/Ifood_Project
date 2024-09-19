

document.addEventListener('DOMContentLoaded', function () {
    const faleConosco = document.querySelector('.Ifoodindex a');

    faleConosco.addEventListener('click', function (event) {
        event.preventDefault(); 
        alert("Entrando em contato com o número de telefone.");
        
    });
});