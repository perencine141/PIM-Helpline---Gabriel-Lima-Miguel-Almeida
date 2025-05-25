-- Cria o banco de dados se ele ainda não existir
CREATE DATABASE IF NOT EXISTS `meu_app_db`;

-- Usa o banco de dados recém-criado (ou existente)
USE `meu_app_db`;

-- Cria a tabela 'usuarios'
CREATE TABLE IF NOT EXISTS `usuarios` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `login` VARCHAR(50) NOT NULL UNIQUE,
    `senha` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) UNIQUE,
    `data_cadastro` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Insere um usuário de exemplo para testes (se ainda não existir)
INSERT IGNORE INTO `usuarios` (`login`, `senha`, `email`) VALUES
('usuario', 'senha123', 'usuario@example.com');
-- 'INSERT IGNORE' tenta inserir, mas ignora se a chave única já existe, evitando duplicatas.
-- Você pode adicionar mais usuários de exemplo se precisar
-- INSERT INTO `usuarios` (`login`, `senha`, `email`) VALUES
-- ('admin', 'admin123', 'admin@example.com');

-- Tabela 'itens' (para a tela de consulta e cadastro)
CREATE TABLE IF NOT EXISTS `itens` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome_item` VARCHAR(100) NOT NULL,
    `descricao` TEXT,
    `preco` TEXT,
    `data_registro` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insere alguns dados de exemplo na tabela 'itens'
INSERT INTO `itens` (`nome_item`, `descricao`, `preco`) VALUES
('Corte de cabelo', 'Corte de cabelo', 'R$ 40')
('Depilação', 'Depilação corporal', 'R$ 80')
('Manicure', 'Unhas das mãos', 'R$ 50')
('Pedicure', 'Unhas dos pés', 'R$ 50')
('Sobrancelha', 'Sobrancelha', 'R$ 30')
ON DUPLICATE KEY UPDATE nome_item = VALUES(nome_item); -- Para evitar erros em re-execuções, apenas atualiza se a linha já existe (ou remova se for rodar uma vez só)