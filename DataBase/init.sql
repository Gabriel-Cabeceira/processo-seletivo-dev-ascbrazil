-- Cria um banco de dados
CREATE DATABASE contatos_data_base;

-- Acessa o banco de dados criado
USE contatos_data_base;

-- Cria uma tabela de contatos
CREATE TABLE contatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    campanha VARCHAR(255),
    nome VARCHAR(255),
    sobrenome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    cidade VARCHAR(255),
    cep VARCHAR(10),
    dataNascimento VARCHAR(10)
);

-- Insere alguns dados de exemplo na tabela de contatos
INSERT INTO contatos (campanha, nome, sobrenome, email, telefone, endereco, cidade, cep, dataNascimento) VALUES
('Campanha 1', 'Gabriel', 'Cabeceira', 'gabriel@teste.com', '5534992201095', 'Rua Aristides Fernandes Morais', 'Uberlândia', '38401-746', '05/03/1999');

INSERT INTO contatos (campanha, nome, sobrenome, email, telefone, endereco, cidade, cep, dataNascimento) VALUES
('Campanha 2', 'Aline', 'Cabeceira', 'aline@teste.com', '5534999312480', 'Rua Aristides Fernandes Morais', 'Uberlândia', '38401-746', '13/01/1998');
