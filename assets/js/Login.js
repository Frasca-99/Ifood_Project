document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('remember');
    const errorMessage = document.getElementById('error-message');


    if (localStorage.getItem('rememberedEmail')) {
        emailField.value = localStorage.getItem('rememberedEmail');
        rememberMeCheckbox.checked = true;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        errorMessage.textContent = '';

        const email = emailField.value.trim();
        const password = passwordField.value.trim();


        if (!email || !password) {
            errorMessage.textContent = 'Por favor, preencha todos os campos.';
            return;
        }

        if (!validateEmail(email)) {
            errorMessage.textContent = 'Por favor, insira um e-mail válido.';
            return;
        }


        if (rememberMeCheckbox.checked) {

            localStorage.setItem('rememberedEmail', email);
        } else {

            localStorage.removeItem('rememberedEmail');
        }

        alert('Login realizado com sucesso!');

    });
});