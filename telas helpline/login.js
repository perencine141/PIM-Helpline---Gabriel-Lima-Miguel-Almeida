document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginInput = document.getElementById('login').value;
    const senhaInput = document.getElementById('senha').value;

    if (loginInput === 'usuario' && senhaInput === 'senha123') {
        alert('Login bem-sucedido! Bem Vindo!');
        window.location.href = 'consulta.html'; 
    } else {
        alert('Login ou senha inválidos. Tente novamente.');
    }
});
