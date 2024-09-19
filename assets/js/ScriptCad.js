
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); 


    const cnpj = document.getElementById('cnpj').value;
    const restaurantName = document.getElementById('restaurantName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    
    if (!cnpj || !restaurantName || !email || !phone || !password) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

    if (!cnpjRegex.test(cnpj)) {
        alert('Por favor, insira um CNPJ válido no formato XX.XXX.XXX/XXXX-XX.');
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert('Por favor, insira um número de celular válido no formato (XX) XXXXX-XXXX.');
        return;
    }

    alert('Cadastro realizado com sucesso!');
});


document.getElementById('cnpj').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 14) {
        value = value.replace(/^(\d{2})(\d)/, "$1.$2");
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }
    e.target.value = value;
});

document.getElementById('phone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }
    e.target.value = value;
});