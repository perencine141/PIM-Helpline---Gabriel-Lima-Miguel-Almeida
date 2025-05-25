document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    // Validação básica
    if (!nome || !email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, verifique.');
        return;
    }

    console.log('Dados a serem cadastrados (simulados):', { nome, email, senha });

    alert('Cadastro realizado com sucesso! (Simulado)');
    // Redireciona para a tela de login após um cadastro bem-sucedido
    window.location.href = 'index.html';
});