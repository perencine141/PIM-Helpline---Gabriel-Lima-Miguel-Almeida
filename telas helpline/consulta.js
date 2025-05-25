document.addEventListener('DOMContentLoaded', function() {
    carregarDados();

    document.getElementById('refreshButton').addEventListener('click', carregarDados);
    document.getElementById('searchButton').addEventListener('click', filtrarDados);
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            filtrarDados();
        }
    });
});

// Dados de exemplo (em um projeto real, viriam do backend via API)
let todosOsDados = []; // Armazenará todos os dados carregados

function carregarDados() {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = '<tr><td colspan="5">Carregando dados...</td></tr>'; // Mensagem de carregamento

    // Simulação de uma chamada de API assíncrona
    setTimeout(() => {
        // Dados vindo do "banco de dados" (simulado)
        const dadosSimulados = [
            { id: 1, nome: 'Corte de cabelo', descricao: 'Corte de cabelo', preco: 'R$ 40', data_registro: '2023-01-15' },
            { id: 2, nome: 'Depilação', descricao: 'Depilação corporal', preco: 'R$ 80', data_registro: '2023-02-01' },
            { id: 3, nome: 'Manicure', descricao: 'Unhas das mãos', preco: 'R$ 50', data_registro: '2023-03-20' },
            { id: 4, nome: 'Pedicure', descricao: 'Unhas dos pés', preco: 'R$ 50', data_registro: '2023-04-10' },
            { id: 5, nome: 'Sobrancelha', descricao: 'Sobrancelha', preco: 'R$ 30', data_registro: '2023-05-05' },
        ];

        todosOsDados = dadosSimulados; // Armazena todos os dados
        renderizarTabela(todosOsDados); // Renderiza a tabela com todos os dados inicialmente
    }, 1000); // Simula um atraso de 1 segundo para a requisição
}

function renderizarTabela(dados) {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = ''; // Limpa o conteúdo atual da tabela

    if (dados.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5">Nenhum registro encontrado.</td></tr>';
        return;
    }

    dados.forEach(item => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = item.id;
        row.insertCell().textContent = item.nome;
        row.insertCell().textContent = item.descricao;
        row.insertCell().textContent = item.preco;
        row.insertCell().textContent = item.data_registro;
    });
}

function filtrarDados() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const dadosFiltrados = todosOsDados.filter(item =>
        item.nome.toLowerCase().includes(searchTerm) ||
        item.descricao.toLowerCase().includes(searchTerm)
    );
    renderizarTabela(dadosFiltrados);
}